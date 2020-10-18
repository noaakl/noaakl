export const ADD_FIELD = "ADD_FIELD";
export const DELETE_FIELD = "DELETE_FIELD";
export const ADD_VALUE = "ADD_VALUE";
export const UPDATE_VALUE = "UPDATE_VALUE";
export const DELETE_VALUE = "DELETE_VALUE";

export function addField(type, key) {
  return {
    type: ADD_FIELD,
    payload: {
      type,
      key,
    },
  };
}

export function deleteField(field) {
  return {
    type: DELETE_FIELD,
    payload: {
      field,
    },
  };
}

export function addValue(field) {
  return {
    type: ADD_VALUE,
    payload: {
      field,
    },
  };
}

export function deleteValue(field, id) {
  return {
    type: DELETE_VALUE,
    payload: {
      field,
      id,
    },
  };
}

export function updateValue(field, id, value) {
  return {
    type: UPDATE_VALUE,
    payload: {
      field,
      id,
      value,
    },
  };
}
