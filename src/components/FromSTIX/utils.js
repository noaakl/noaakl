import { saveAs } from "file-saver";
import { v4 as uuidv4 } from "uuid";

export function stateMappingToShifterMapping(stateMapping) {
  let output = {};
  Object.keys(stateMapping).forEach((field) => {
    const type = field.split(":")[0];
    const key = field.split(":")[1];
    if (!(type in output)) {
      output[type] = { fields: {} };
    }
    output[type]["fields"][key] = stateMapping[field].map((o) => o.value);
  });
  return output;
}

export function saveJsonToDisk(filename, obj) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], {
    type: "application/json",
  });
  saveAs(blob, filename);
}

export function loadJsonFromDisk(obj) {
  return shifterMappingToStateMapping(obj);
}

function shifterMappingToStateMapping(shifterMapping) {
  let stateMapping = {};
  if (!shifterMapping) return stateMapping;
  Object.keys(shifterMapping).forEach((type) => {
    if ("fields" in shifterMapping[type]) {
      const fields = shifterMapping[type]["fields"];
      Object.keys(fields).forEach((key) => {
        stateMapping[`${type}:${key}`] = fields[key].map((value) => ({
          value,
          id: uuidv4(),
        }));
      });
    }
  });
  return stateMapping;
}

export function filterFieldsForValue(fields, value) {
  if (!value || value === "") return fields;
  const lowerCaseValue = value.toLowerCase();
  let filteredFields = fields.filter(
    (category) =>
      category.title.toLowerCase().includes(lowerCaseValue) ||
      category.type.includes(lowerCaseValue)
  );
  filteredFields = filteredFields.filter(
    (category) => category.items.length > 0
  );
  return filteredFields;
}
