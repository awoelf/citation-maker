import { ChangeEvent } from 'react';
import { FormElement } from '@nextui-org/react';

export type formEvent = ChangeEvent<FormElement>;

export interface form {
  author?: string;
  title?: string;
  source?: string;
  otherContributors?: [string];
  edition?: string;
  number?: string;
  publisher?: string;
  location?: string;
  datePublished?: string;
  dateAccessed?: string;
}
