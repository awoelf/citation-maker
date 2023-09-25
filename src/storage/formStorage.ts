import useLocalStorageState from 'use-local-storage-state';
import { form, formEvent } from '@/@types/form';
import dayjs from 'dayjs';

// TO DO: Change citationSource to '' once other sources are supported.
export default function FormStorage() {
  const [form, setForm, { removeItem }] = useLocalStorageState<form>('form', {
    defaultValue: {
      id: '',
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
      dayPublished: '',
      monthPublished: '',
      yearPublished: '',
      location: '',
      url: '',
      pageStart: '',
      pageEnd: '',
      doi: '',
      dateAccessed: '',
      dayAccessed: '',
      monthAccessed: '',
      yearAccessed: '',
      citationSource: 'misc',
    },
  });

  function updateForm(e: formEvent) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function updateFormDate(inputName: string, inputValue: number)  {
    setForm({ ...form, [inputName]: inputValue });
  }

  function updateTodayDate() {
    setForm({
      ...form,
      dayAccessed: dayjs().date(),
      monthAccessed: dayjs().month() + 1,
      yearAccessed: dayjs().year(),
    });
  }

  function updateCitationSource(citationSource: string) {
    setForm({ ...form, citationSource: citationSource });
  }

  return { form, setForm, removeItem, updateForm, updateFormDate, updateTodayDate, updateCitationSource };
}
