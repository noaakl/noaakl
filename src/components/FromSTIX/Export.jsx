import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, TextInput } from "carbon-components-react";
import { Save16 } from "@carbon/icons-react";
import { saveJsonToDisk, stateMappingToShifterMapping } from "./utils";

import styles from "./from_stix.module.scss";

const Export = () => {
  const [exportFilename, setExportFilename] = useState("");
  const mapping = useSelector((state) => state.fromStix.mapping);
  return (
    <>
      <div className="bx--row">
        <div className="bx--col">
          <h4 className="section-title">Save Configuration</h4>
        </div>
      </div>

      <div className="bx--row" style={{ marginBottom: ".75rem" }}>
        <div className={`bx--col ${styles.export__col}`}>
          <div className="bx--row">
            <div className="bx--col">
              <TextInput
                autoComplete={"off"}
                id={"export-filename"}
                labelText={"Filename"}
                value={exportFilename}
                onChange={(input) => {
                  setExportFilename(input.target.value);
                }}
              />
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col" style={{ textAlign: "right" }}>
              <Button
                disabled={exportFilename.length === 0}
                renderIcon={Save16}
                onClick={() => {
                  saveJsonToDisk(
                    `${exportFilename}.json`,
                    stateMappingToShifterMapping(mapping)
                  );
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Export;
