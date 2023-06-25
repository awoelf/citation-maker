import { ChangeEvent } from 'react';
import { FormElement } from '@nextui-org/react';

export type formEvent = ChangeEvent<FormElement>;

export type formChange = (e: ChangeEvent<FormElement>) => void;

export interface formProps {
  formValue?: string;
  updateForm: formChange;
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
