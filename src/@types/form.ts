import { ChangeEvent, ReactNode } from 'react';
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
  formValue?: formValueType;
  updateForm?: formChange | formChangeDropdown;
  inputName: string;
  tooltipMessage?: string;
  contentLeft?: ReactNode;
  fullWidth?: boolean;
  type?: string;
  cols?: number;
  mobileCols?: number;
  label?: string;
  placeholder?: string;
}

export interface tooltipProps {
  tooltipMessage: string;
}

export interface otherContributors {
  key: string;
  value: contributor;
}

// Interface for form input
export interface form {
  id: string;
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
  datePublished?: string;
  dayPublished?: number;
  monthPublished?: number;
  yearPublished?: number;
  dateAccessed?: string;
  dayAccessed?: number;
  monthAccessed?: number;
  yearAccessed?: number;
  citationSource: string;
}

// Interface for passing form data to citation style handler
export interface citationProps {
  data: form;
}

export type formEvent = ChangeEvent<FormElement>;
export type formChange = (e: ChangeEvent<FormElement>) => void;
export type formChangeDropdown = (inputName: string, inputValue: number) => void;
export type formValueType = string | [string] | contributor | contributor[] | number;