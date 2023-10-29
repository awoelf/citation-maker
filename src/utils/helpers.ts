import ShortUniqueId from 'short-unique-id';

// Capitalize first letter in string
export const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Add space before capital letters (for camelCase strings)
export const addSpace = (str: string) => {
    return str.replace(/([A-Z])/g, ' $1').trim();
};

// Copies target element's text to clipboard
export const copyCitation = (elementId: string) => {
    const copyText = document.getElementById(elementId);
    navigator.clipboard.writeText(copyText?.innerText || '');
};

// Generates a unique id
export const generateUid = () => {
    const uid = new ShortUniqueId({ length: 10 });
    return uid.rnd();
};
