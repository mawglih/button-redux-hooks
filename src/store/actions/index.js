import { INCREMENT_COUNTER, RESET_COUNTER } from './action-types';

export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER,
    }
}

export const resetMyCounter = () => {
    return {
      type: RESET_COUNTER,

    };
  };