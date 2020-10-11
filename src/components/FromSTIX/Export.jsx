import React from "react";
import styles from "./from_stix.module.scss";
import { Button, TextInput } from "carbon-components-react";
import { Save16 } from "@carbon/icons-react";

const Export = () => {
  return (
    <>
      <div className="bx--row">
        <div className="bx--col">
          <h4 className="section-title">Export</h4>
        </div>
      </div>

      <div className="bx--row">
        <div
          className={`bx--col ${styles.full_height__col} ${styles.export__col}`}
        >
          <div className="bx--row" style={{ marginBottom: ".5rem" }}>
            <div className="bx--col">
              <TextInput id={"filename"} labelText={"Filename"} />
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col" style={{ textAlign: "right" }}>
              <Button renderIcon={Save16}>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Export;
