import { v4 as uuidv4 } from "uuid";
import {
  ADD_FIELD,
  ADD_VALUE,
  DELETE_FIELD,
  DELETE_VALUE,
  UPDATE_VALUE,
} from "../actions/from_stix";

const INITIAL_STATE = {
  mapping: {},
};

const FromSTIXReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FIELD: {
      const field = `${action.payload.type}:${action.payload.key}`;
      return {
        ...state,
        mapping: {
          ...state.mapping,
          [field]: [],
        },
      };
    }

    case DELETE_FIELD: {
      if (action.payload.field in state.mapping) {
        const { [action.payload.field]: v, ...mapping } = state.mapping;
        return {
          ...state,
          mapping: mapping,
        };
      }
      return state;
    }

    case ADD_VALUE: {
      if (action.payload.field in state.mapping) {
        return {
          ...state,
          mapping: {
            ...state.mapping,
            [action.payload.field]: [
              ...state.mapping[action.payload.field],
              { value: "", id: uuidv4() },
            ],
          },
        };
      }
      return state;
    }

    case DELETE_VALUE: {
      if (action.payload.field in state.mapping) {
        return {
          ...state,
          mapping: {
            ...state.mapping,
            [action.payload.field]: state.mapping[action.payload.field].filter(
              (o) => o.id !== action.payload.id
            ),
          },
        };
      }
      return state;
    }

    case UPDATE_VALUE: {
      if (action.payload.field in state.mapping) {
        return {
          ...state,
          mapping: {
            ...state.mapping,
            [action.payload.field]: state.mapping[
              action.payload.field
            ].map((o) =>
              o.id === action.payload.id
                ? { ...o, value: action.payload.value }
                : o
            ),
          },
        };
      }
      return state;
    }

    default:
      return state;
  }
};

export default FromSTIXReducer;
