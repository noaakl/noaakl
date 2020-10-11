import React from "react";
import { TextInput } from "carbon-components-react";
import { Delete20, Add16 } from "@carbon/icons-react";
import styles from "./from_stix.module.scss";

const MappingItem = ({ title }) => {
  return (
    <li className={styles.mapping__item}>
      <div className="bx--row" style={{ marginBottom: ".5rem" }}>
        <div className="bx--col-sm-3">
          <h1 className={styles.mapping_item__title}>{title}</h1>
        </div>
        <div className={`bx--col-sm-1 ${styles.mapping_item__add}`}>
          <Add16 style={{ border: "1px solid #000000" }} />
        </div>
      </div>
      <div className="bx--row">
        <div className="bx--col-sm-3">
          <TextInput id={"x"} labelText={""} />
        </div>
        <div className="bx--col-sm-1">
          <Delete20 />
        </div>
      </div>
    </li>
  );
};

export default MappingItem;
