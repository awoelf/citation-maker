import { ChangeEvent, SetStateAction, Dispatch } from 'react';
export type formEvent = ChangeEvent<FormElement>;
export type formChange = (e: ChangeEvent<FormElement>) => void;
import { FormElement } from '@nextui-org/react';

export interface formProps {
  formValue?: string | [string];
  updateForm?: formChange;
  inputName: string;
  tooltipMessage?: string;
  fullWidth?: boolean;
  type?: string;
  cols?: number;
  mobileCols?: number;
}

export interface citationProps {
  form?: form;
}

export interface form {
  firstName?: string;
  lastName?: string;
  middleInitial?: string;
  suffix?: string;
  title?: string;
  source?: string;
  otherContributors?: [string];
  number?: string;
  version?: string;
  publisher?: string;
  location?: string;
  url?: string;
  pageStart?: string;
  pageEnd?: string;
  doi?: string;
  datePublished?: string;
  dateAccessed?: string;
}

export type Citations = [form];