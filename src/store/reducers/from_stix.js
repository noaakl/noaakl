import { v4 as uuidv4 } from "uuid";
import {
  ADD_FIELD,
  ADD_VALUE,
  DELETE_FIELD,
  DELETE_VALUE,
  UPDATE_SEARCH_FIELD_VALUE,
  UPDATE_VALUE,
  UPDATE_MAPPINGS_FROM_FILE,
  UPDATE_MAPPINGS_FILTER_FIELD_VALUE,
  CLEAR_MAPPINGS,
  CHANGE_STIX_VERSION,
} from "../actions/from_stix";
import stixLanguageV2 from "../../global/stixLangV2";
import { filterFieldsForValue, updateVersionOfStix } from "../../components/FromSTIX/utils";

const INITIAL_STATE = {
  mapping: {},
  stixFields: stixLanguageV2,
  fieldSearch: "",
  fieldMappingFilter: "",
  num:0,
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

    case UPDATE_SEARCH_FIELD_VALUE: {
      return {
        ...state,
        fieldSearch: action.payload.value,
        stixFields: filterFieldsForValue(stixLanguageV2, action.payload.value),
      };
    }

    case UPDATE_MAPPINGS_FILTER_FIELD_VALUE: {
      return {
        ...state,
        fieldMappingFilter: action.payload.value,
      };
    }

    case UPDATE_MAPPINGS_FROM_FILE: {
      return {
        ...state,
        mapping: action.payload.mappings,
      };
    }

    case CLEAR_MAPPINGS: {
      return {
        ...state,
        mapping: {},
      };
    }
    case CHANGE_STIX_VERSION:{
      return{
        ...state,
        stixFields: updateVersionOfStix(action.payload.version),

      };
    }

    default:
      return state;
  }
};

export default FromSTIXReducer;
