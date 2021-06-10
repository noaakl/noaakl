import { saveAs } from "file-saver";
import { v4 as uuidv4 } from "uuid";
import stixLangV2 from "../../global/stixLangV2";
import stixLangV2_1 from "../../global/stixLangV2_1";

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

export function filterMappingFieldsForValue(mappings, value) {
  if (!value || value === "") return mappings;
  const lowerCaseValue = value.toLowerCase();
  return Object.keys(mappings)
    .filter((category) => category.toLowerCase().includes(lowerCaseValue))
    .reduce((obj, key) => {
      obj[key] = mappings[key];
      return obj;
    }, {});
}


export function updateVersionOfStix(stixversion){
  let version = stixLangV2;
  if(stixversion==="stix_version_2_1"){
    version = stixLangV2_1;
  }
  return version;

}
