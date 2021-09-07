import {
    INCREMENT_COUNTER,
    RESET_COUNTER
  } from '../actions/action-types';
  
  const INITIAL_STATE = {
    counters: 0,
  };
  
  const countersReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
      case INCREMENT_COUNTER:
        return {
          counters: state.counters + 1
        };
      case RESET_COUNTER:
        return {
          counters: 0
        };
      default:
        return state;
    }
  }
  
  export default countersReducer;