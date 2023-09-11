import { ChangeEvent } from 'react';
export type formEvent = ChangeEvent<FormElement>;
export type formChange = (e: ChangeEvent<FormElement>) => void;
import { FormElement } from '@nextui-org/react';

// Interface for other contributors
export interface contributor {
  id: string;
  role: string;
  firstName: string;
  middleInitial: string;
  lastName: string;
  suffix: string;
}

// Interface that is used for passing props to the TextInput component
export interface formProps {
  formValue?: string | [string];
  updateForm?: formChange;
  inputName: string;
  tooltipMessage?: string;
  fullWidth?: boolean;
  type?: string;
  cols?: number;
  mobileCols?: number;
  label?: string;
  placeholder?: string;
}

export interface otherContributors {
  key: string;
  value: contributor;
}

// Interface for form input
export interface form {
  id?: string;
  firstName?: string;
  middleInitial?: string;
  lastName?: string;
  suffix?: string;
  title?: string;
  source?: string;
  otherContributors?: Array<contributor>;
  number?: string;
  version?: string;
  issue?: string;
  publisher?: string;
  location?: string;
  url?: string;
  pageStart?: string;
  pageEnd?: string;
  doi?: string;
  dayPublished?: string;
  monthPublished?: string;
  yearPublished?: string;
  dayAccessed?: string;
  monthAccessed?: string;
  yearAccessed?: string;
  citationSource?: string;
}

// Interface for passing form data to citation style handler
export interface citationProps {
  data: form;
}
