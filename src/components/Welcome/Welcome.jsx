import React from "react";
import {ClickableTile} from "carbon-components-react";

import styles from "./welcome.module.scss";
import {Link} from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <p>
              This tool is used for generating mapping file for `STIX-Shifter`
              project
            </p>
          </div>
        </div>

        <div className="bx--row">
          <div className="bx--col-sm-2">
            <Link to="/from_stix">
            <ClickableTile className={styles.tile__btn}>
              Generate "From STIX" File
            </ClickableTile>
            </Link>
          </div>
          <div className="bx--col-sm-2">
            <Link to="/to_stix">
            <ClickableTile className={styles.tile__btn}>
              Generate "To STIX" File
            </ClickableTile>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
