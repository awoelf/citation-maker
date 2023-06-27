import useLocalStorageState from 'use-local-storage-state';
import { form } from '@/@types/Form';

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
      volume: '',
      publisher: '',
      location: '',
      datePublished: '',
      dateAccessed: '',
    },
  });

  return {form, setForm, removeItem};
}