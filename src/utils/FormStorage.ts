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

  return {form, setForm, removeItem};
}