export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const addSpace = (str: string) => {
  return str.replace(/([A-Z])/g, ' $1').trim();
};

export const filterList = (list: [string], str: string) => {
  return list.filter((item) => item !== str) as [string];
};

// This might be unused
const formatElement = (element: string, type?: string ) => {
  // switch(type) {
  //   case 'lastName':
  //     return element ? element + ', ' : '';
  //   case 'title':
  //     return element ? '"' + element + '." ': '';
  //   case 'datePublished':
  //     return element ? dayjs(element).format('D MMM. YYYY. ') : '';
  //   case 'dateAccessed':
  //     return element ? 'Accessed ' + dayjs(element).format('D MMM. YYYY. ') : '';
  //   default:
  //     return element ? element + '. ': '';
  // }
};
