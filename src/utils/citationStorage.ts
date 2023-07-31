import { form } from '@/@types/form';
import useLocalStorageState from 'use-local-storage-state';
import { nanoid } from 'nanoid';

// Local storage object for storing form data of multiple citations
export function Citations() {
  const addNewCitation = (formData: form) => {
    formData.id = nanoid();
    
  };

  const updateCitationById = () => {};

  const deleteCitationById = () => {};

  const [citations, setCitations, { removeItem }] = useLocalStorageState<[form]>('citations');
  return { citations, setCitations, removeItem };
}

// Might be unused
// export function CitationFormatted() {
//   const [citationFormatted, setCitationFormatted, { removeItem }] = useLocalStorageState<string>(
//     'citationFormatted',
//     { defaultValue: '' }
//   );
//   return { citationFormatted, setCitationFormatted, removeItem };
// }

// User defined citation style (eg. MLA, APA, Chicago)
export function CitationStyle() {
  const [citationStyle, setCitationStyle, { removeItem }] = useLocalStorageState<string | undefined>(
    'citationStyle',
    { defaultValue: undefined }
  );
  return { citationStyle, setCitationStyle, removeItem };
}

// User defined citation source (eg. Book, Website, Journal, Misc)
export function CitationSource() {
  const [citationSource, setCitationSource, { removeItem }] = useLocalStorageState<string>(
    'citationSource',
    { defaultValue: 'misc' }
  );
  return { citationSource, setCitationSource, removeItem };
}
