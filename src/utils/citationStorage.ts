import { form } from '@/@types/form';
import useLocalStorageState from 'use-local-storage-state';
import FormStorage from './formStorage';
import { useRouter } from 'next/router';

// Local storage object for storing form data of multiple citations
export function Citations() {
  const updateCitationById = (id: string) => {
    // const { setForm } = FormStorage();
    // const router = useRouter();

    // const formData = citations?.find((item) => item.id == id);

    // if (formData) setForm(formData);
    // router.push('/')
  };

  const deleteCitationById = (id: string) => {
    const filteredCitations = citations?.filter((item) => item.id != id);
    filteredCitations?.length === 0 ? setCitations(undefined) : setCitations(filteredCitations);
  };

  const [citations, setCitations, { removeItem }] = useLocalStorageState<Array<form>>('citations');
  return { citations, setCitations, deleteCitationById, updateCitationById, removeItem };
}

// User defined citation style (eg. MLA, APA, Chicago)
export function CitationStyle() {
  const [citationStyle, setCitationStyle, { removeItem }] = useLocalStorageState<string>(
    'citationStyle',
    { defaultValue: '' }
  );
  return { citationStyle, setCitationStyle, removeItem };
}
