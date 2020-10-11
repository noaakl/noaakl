export const ADD_FIELD = "ADD_FIELD";

export function addField(type, key) {
  return {
    type: ADD_FIELD,
    payload: {
      type,
      key,
    },
  };
}
