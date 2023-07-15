import useLocalStorageState from 'use-local-storage-state';
import { form, formEvent } from '@/@types/form';

export default function FormStorage() {
  const [form, setForm, { removeItem }] = useLocalStorageState<form>('form', {
    defaultValue: {
      firstName: '',
      lastName: '',
      middleInitial: '',
      suffix: '',
      title: '',  
      source: '',
      otherContributors: undefined,
      version: '',
      number: '',
      publisher: '',
      datePublished: '',
      location: '',
      url: '',
      pageStart: '',
      pageEnd: '',
      doi: '',
      dateAccessed: '',
    },
  });

  function updateForm(e: formEvent) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return {form, setForm, removeItem, updateForm};
}