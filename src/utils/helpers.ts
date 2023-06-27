import { Citations } from '@/@types/Citation';

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const addSpace = (str: string) => {
  return str.replace(/([A-Z])/g, ' $1').trim();
};

export const filterList = (list: [string], str: string) => {
  return list.filter((item) => item !== str) as [string];
};

export const sortAlpha = (arr: [string]) => {}

export const MLAFormat = (citationRaw: Citations): [string] => {
  

  
}