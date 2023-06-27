import { Citations } from '@/@types/Citation';
import useLocalStorageState from 'use-local-storage-state';

export default function CitationStorage() {
  const [citationList, setCitationList, { removeItem }] =
    useLocalStorageState<Citations>('citationList');
  return { citationList, setCitationList, removeItem };
}
