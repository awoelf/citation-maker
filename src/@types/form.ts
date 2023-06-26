import { ChangeEvent, SetStateAction, Dispatch } from 'react';
import { FormElement } from '@nextui-org/react';

export type formEvent = ChangeEvent<FormElement>;

export type formChange = (e: ChangeEvent<FormElement>) => void;

export type formSetContributors = (contributors: [string]) => void;

export interface formProps {
  formValue?: string | [string];
  updateForm?: formChange;
  addContributors?: formSetContributors;
  removeContributors?: formSetContributors;
  inputName: string;
  tooltipMessage?: string;
  fullWidth?: boolean;
  type?: string;
  cols?: number;
}

export interface form {
  author?: string;
  title?: string;
  source?: string;
  otherContributors?: [string];
  version?: string;
  volume?: string;
  publisher?: string;
  location?: string;
  datePublished?: string;
  dateAccessed?: string;
}
