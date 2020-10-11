import { ADD_FIELD } from "../actions/from_stix";

const INITIAL_STATE = {
  mapping: {},
};

const FromSTIXReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FIELD:
      const field = `${action.payload.type}:${action.payload.key}`;
      return {
        ...state,
        mapping: {
          ...state.mapping,
          [field]: [],
        },
      };
    default:
      return state;
  }
};

export default FromSTIXReducer;
