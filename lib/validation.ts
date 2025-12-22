/**
 * Validation utilities for region-trek connections
 * These functions help ensure data integrity between regions and treks
 */

import { Trek, Region } from './types';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  info: string[];
}

/**
 * Validate that a trek's region field is properly set
 */
export function validateTrekRegion(trek: Trek, availableRegions: Region[]): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    info: []
  };

  // Check if region field exists
  if (!trek.region) {
    result.isValid = false;
    result.errors.push(`Trek "${trek.name}" is missing a region field`);
    return result;
  }

  // Check if region field matches any available region
  const regionLower = trek.region.toLowerCase();
  const matchedRegion = availableRegions.find(r => {
    const regionIdLower = r.id.toLowerCase();
    const regionNameLower = r.name.toLowerCase();
    
    return regionLower === regionIdLower ||
           regionLower === regionNameLower ||
           regionLower.includes(regionIdLower) ||
           regionNameLower.includes(regionLower);
  });

  if (!matchedRegion) {
    result.isValid = false;
    result.errors.push(
      `Trek "${trek.name}" has region "${trek.region}" which doesn't match any available region. ` +
      `Available regions: ${availableRegions.map(r => r.id).join(', ')}`
    );
    return result;
  }

  // Success
  result.info.push(`Trek "${trek.name}" correctly linked to region "${matchedRegion.name}"`);
  
  // Warn if format could be improved
  if (trek.region !== matchedRegion.id && trek.region.toLowerCase() !== matchedRegion.id.toLowerCase()) {
    result.warnings.push(
      `Trek "${trek.name}" uses region "${trek.region}". ` +
      `For consistency, consider using the region slug "${matchedRegion.id}"`
    );
  }

  return result;
}

/**
 * Validate all treks against available regions
 */
export function validateAllTreks(treks: Trek[], regions: Region[]): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    info: []
  };

  let validCount = 0;
  let invalidCount = 0;

  treks.forEach(trek => {
    const trekResult = validateTrekRegion(trek, regions);
    
    if (trekResult.isValid) {
      validCount++;
    } else {
      invalidCount++;
      result.isValid = false;
    }

    result.errors.push(...trekResult.errors);
    result.warnings.push(...trekResult.warnings);
    result.info.push(...trekResult.info);
  });

  // Add summary
  result.info.unshift(
    `Validation complete: ${validCount} valid, ${invalidCount} invalid out of ${treks.length} total treks`
  );

  return result;
}

/**
 * Validate that each region has at least one trek
 */
export function validateRegionCoverage(regions: Region[], treks: Trek[]): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    info: []
  };

  regions.forEach(region => {
    const regionTreks = treks.filter(trek => {
      const trekRegion = trek.region.toLowerCase();
      const regionId = region.id.toLowerCase();
      return trekRegion === regionId || trekRegion.includes(regionId);
    });

    if (regionTreks.length === 0) {
      result.warnings.push(
        `Region "${region.name}" (${region.id}) has no treks associated with it`
      );
    } else {
      result.info.push(
        `Region "${region.name}" has ${regionTreks.length} trek(s)`
      );
    }
  });

  return result;
}

/**
 * Run all validations and return combined results
 */
export function validateEverything(treks: Trek[], regions: Region[]): ValidationResult {
  const trekValidation = validateAllTreks(treks, regions);
  const coverageValidation = validateRegionCoverage(regions, treks);

  return {
    isValid: trekValidation.isValid && coverageValidation.isValid,
    errors: [...trekValidation.errors, ...coverageValidation.errors],
    warnings: [...trekValidation.warnings, ...coverageValidation.warnings],
    info: [...trekValidation.info, ...coverageValidation.info]
  };
}

/**
 * Format validation results as a readable string
 */
export function formatValidationResults(result: ValidationResult): string {
  let output = '';

  if (result.errors.length > 0) {
    output += '❌ ERRORS:\n';
    result.errors.forEach(error => {
      output += `  - ${error}\n`;
    });
    output += '\n';
  }

  if (result.warnings.length > 0) {
    output += '⚠️  WARNINGS:\n';
    result.warnings.forEach(warning => {
      output += `  - ${warning}\n`;
    });
    output += '\n';
  }

  if (result.info.length > 0) {
    output += '✅ INFO:\n';
    result.info.forEach(info => {
      output += `  - ${info}\n`;
    });
  }

  return output;
}
