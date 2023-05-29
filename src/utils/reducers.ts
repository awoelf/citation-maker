import { Dispatch, ServerContextJSONValue } from 'react';
import { SET_THEME } from './actions';

export default function (state: any, action: any) {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
}
