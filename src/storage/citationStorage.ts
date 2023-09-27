import { form } from '@/@types/form';
import useLocalStorageState from 'use-local-storage-state';

// Stores user-created citations
export function Citations() {
  // Create an array of type form in local storage named 'citations'
  const [citations, setCitations, { removeItem }] = useLocalStorageState<Array<form>>('citations');

  function deleteCitationById(id: string) {
    const filteredCitations = citations?.filter((item) => item.id != id);
    filteredCitations?.length === 0 ? setCitations(undefined) : setCitations(filteredCitations);
  }

  function addCitation(formData: form) {
    const citationsList: Array<form> = [];
    if (citations) citationsList.push(...citations);
    citationsList.push(formData);
    setCitations(citationsList);
  }

  function updateCitation(formData: form) {
    const filteredCitations = citations?.filter((item) => item.id != formData.id);
    filteredCitations?.push(formData);
    setCitations(filteredCitations);
  }

  return { citations, setCitations, deleteCitationById, removeItem, addCitation, updateCitation };
}

// Stores user-selected citation style (only MLA is available right now)
export function CitationStyle() {
  // Create a field that stored a string in local storage called 'citationStyle'
  const [citationStyle, setCitationStyle, { removeItem }] = useLocalStorageState<string>(
    'citationStyle',
    { defaultValue: 'mla' }
  );

  return { citationStyle, setCitationStyle, removeItem };
}
