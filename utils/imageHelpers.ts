import type { StaticImageData } from 'next/image';

export const getImageSrc = (img: string | StaticImageData): string => {
  return typeof img === 'string' ? img : img.src;
};
