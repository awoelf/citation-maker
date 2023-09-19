import ShortUniqueId from 'short-unique-id';

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const addSpace = (str: string) => {
  return str.replace(/([A-Z])/g, ' $1').trim();
};

export const filterList = (list: [string], str: string) => {
  return list.filter((item) => item !== str) as [string];
};

// TO DO: remove/change
export const validateInput = (value: string) => {
  return value.match(/^[a-zA-Z0-9_\-()\/ .,:'’]*$/i);
};

export const copyCitation = (elementId: string) => {
  const copyText = document.getElementById(elementId);
  navigator.clipboard.writeText(copyText?.innerText || '');
};

export const generateUid = () => {
  const uid = new ShortUniqueId({ length: 10 });
  return uid.rnd();
}
