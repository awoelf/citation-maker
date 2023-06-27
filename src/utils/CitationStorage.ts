import { Citations } from '@/@types/Citation';
import useLocalStorageState from 'use-local-storage-state';

export function CitationRaw() {
  const [citationRaw, setCitationRaw, { removeItem }] =
    useLocalStorageState<Citations>('citationRaw');
  return { citationRaw, setCitationRaw, removeItem };
}

export function CitationFormatted() {
  const [citationFormat, setCitationFormat, { removeItem }] =
    useLocalStorageState<[string]>('citationFormat');
  return { citationFormat, setCitationFormat, removeItem };
}

export function CitationStyle() {
  const [citationStyle, setCitationStyle, { removeItem }] = useLocalStorageState<string>(
    'citationStyle',
    { defaultValue: '' }
  );
  return { citationStyle, setCitationStyle, removeItem };
}
