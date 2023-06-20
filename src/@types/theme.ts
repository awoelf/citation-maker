import { ServerContextJSONValue, SetStateAction, Dispatch } from 'react';

export interface themeInterface {
  stateTheme: ServerContextJSONValue;
  dispatchTheme: Dispatch<SetStateAction<string>>;
}