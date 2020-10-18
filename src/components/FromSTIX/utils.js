import { saveAs } from "file-saver";

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
