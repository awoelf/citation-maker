import useLocalStorageState from 'use-local-storage-state';
import { form } from '@/@types/form';

export default function FormStorage() {
  const [form, setForm, { removeItem }] = useLocalStorageState<form>('form', {
    defaultValue: {
      author: '',
      title: '',
      source: '',
      otherContributors: undefined,
      version: '',
      volume: '',
      publisher: '',
      location: '',
      datePublished: '',
      dateAccessed: '',
    },
  });

  return {form, setForm, removeItem};
}