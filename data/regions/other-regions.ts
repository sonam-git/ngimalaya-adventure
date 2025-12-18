import type { Trek } from '../treks';

/**
 * ========================================
 * OTHER REGIONS - PLACEHOLDER FILE
 * ========================================
 * 
 * This file is a placeholder for treks from regions that are NOT in the main region list.
 
 * ========================================
 * ADD YOUR TREKS HERE IF THEY ARE FROM:
 * ========================================
 * - Helambu Region
 * - Tsum Valley
 * - Nar Phu Valley
 * - Tamang Heritage Trail
 * - Ganesh Himal Region
 * - Gosaikunda Region
 * - Khopra Ridge
 * - Mardi Himal
 * - Pikey Peak
 * - Or any other region not listed above
 * 
 * ========================================
 * EXAMPLE STRUCTURE:
 * ========================================
 * 
export const otherRegionTreks: Trek[] = [
 *   {
 *     id: 'helambu-trek',
 *     name: 'Helambu Trek',
 *     duration: '7 Days',
 *     altitude: '3,650m (11,975ft)',
 *     difficulty: 'Moderate',
 *     description: 'Beautiful trek through traditional Sherpa and Tamang villages...',
 *     highlights: [
 *       'Traditional Sherpa villages',
 *       'Beautiful rhododendron forests',
 *       'Stunning mountain views'
 *     ],
 *     image: '/assets/images/helambu.jpg',
 *     price: '$799',
 *     season: 'Mar-May, Sep-Nov',
 *     groupSize: '2-12 people',
 *     region: 'Helambu Region',
 *     itinerary: [
 *       {
 *         day: 1,
 *         title: 'Day 1 Title',
 *         description: 'Day 1 description',
 *         accommodation: 'Teahouse',
 *         meals: 'All meals',
 *         walkingHours: '5-6 hours'
 *       },
 *       // ... more days
 *     ],
 *     included: ['Permits', 'Guide', 'Accommodation'],
 *     excluded: ['Flights', 'Insurance'],
 *     requirements: ['Basic fitness', 'Travel insurance'],
 *     adventureType: 'trekking',
 *     mapUrl: 'optional-custom-google-maps-url'
 *   }
];
 * 
 * ========================================
 * IMPORTANT NOTES:
 * ========================================
 * 1. If you're adding a trek to one of the MAIN REGIONS above,
 *    DO NOT add it here! Add it to the appropriate region file.
 * 
 * 2. When you add treks here, uncomment the "Other Regions" entry
 *    in data/treks.ts (around line 161) so it appears in the menu.
 * 
 * 3. If you accumulate multiple treks for a specific region (e.g., 3+ Helambu treks),
 *    consider creating a dedicated file like helambu.ts instead.
 * 
 * 4. Remember to update the region name to match your new region!
 * 
 * ========================================
 */

// Currently empty - Add your treks from OTHER regions here
export const otherRegionTreks: Trek[] = [];

// You can also organize by specific smaller regions (optional):
// export const helambuTreks: Trek[] = [];
// export const tsumValleyTreks: Trek[] = [];
// export const narPhuTreks: Trek[] = [];
// export const tamangHeritageTreks: Trek[] = [];
// export const ganeshHimalTreks: Trek[] = [];

// Then combine them:
// export const otherRegionTreks: Trek[] = [
//   ...helambuTreks,
//   ...tsumValleyTreks,
//   ...narPhuTreks,
//   ...tamangHeritageTreks,
//   ...ganeshHimalTreks
// ];
