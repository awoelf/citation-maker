import { Citations } from '@/@types/Citation';
import { form } from '@/@types/Form';

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const addSpace = (str: string) => {
  return str.replace(/([A-Z])/g, ' $1').trim();
};

export const filterList = (list: [string], str: string) => {
  return list.filter((item) => item !== str) as [string];
};

const formatDate = () => {

}

// TO DO: Create switch case for book, journal, website
export const MLAStyle = (form: form): string => {
  const citation: string = `${form?.lastName + ', '}${form?.firstName + ' '}${form.middleInitial + '. '}
   ${'"' + form?.title + '"' + '. '}${form?.source + '. '}${form?.volume + '. '}${form?.version + '. '}${form?.publisher + '. '}
  `;

  return citation;
};
