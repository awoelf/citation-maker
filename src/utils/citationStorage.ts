import { Citations } from '@/@types/form';
import useLocalStorageState from 'use-local-storage-state';

export function CitationRaw() {
  const [citationRaw, setCitationRaw, { removeItem }] =
    useLocalStorageState<Citations>('citationRaw');
  return { citationRaw, setCitationRaw, removeItem };
}

export function CitationFormatted() {
  const [citationFormatted, setCitationFormatted, { removeItem }] = useLocalStorageState<string>(
    'citationFormatted',
    { defaultValue: '' }
  );
  return { citationFormatted, setCitationFormatted, removeItem };
}

export function CitationStyle() {
  const [citationStyle, setCitationStyle, { removeItem }] = useLocalStorageState<string>(
    'citationStyle',
    { defaultValue: '' }
  );
  return { citationStyle, setCitationStyle, removeItem };
}

export function CitationSource() {
  const [citationSource, setCitationSource, { removeItem }] = useLocalStorageState<string>(
    'citationSource',
    { defaultValue: '' }
  );
  return { citationSource, setCitationSource, removeItem };
}
