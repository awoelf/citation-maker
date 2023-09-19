import { form } from '@/@types/form';
import useLocalStorageState from 'use-local-storage-state';

// Local storage object for storing form data of multiple citations
export function Citations() {
    const deleteCitationById = (id: string) => {
    const filteredCitations = citations?.filter((item) => item.id != id);
    filteredCitations?.length === 0 ? setCitations(undefined) : setCitations(filteredCitations);
  };

  const addCitation = (formData: form) => {
    const citationsList: Array<form> = [];
    if (citations) citationsList.push(...citations);
    citationsList.push(formData);
    setCitations(citationsList);
  }

  const updateCitation = (formData: form) => {
    const filteredCitations = citations?.filter((item) => item.id != formData.id);
    filteredCitations?.push(formData);
    setCitations(filteredCitations);
  };

  const [citations, setCitations, { removeItem }] = useLocalStorageState<Array<form>>('citations');
  return { citations, setCitations, deleteCitationById, removeItem, addCitation, updateCitation };
}

// User defined citation style (eg. MLA, APA, Chicago)
export function CitationStyle() {
  const [citationStyle, setCitationStyle, { removeItem }] = useLocalStorageState<string>(
    'citationStyle',
    { defaultValue: 'mla' }
  );
  return { citationStyle, setCitationStyle, removeItem };
}
