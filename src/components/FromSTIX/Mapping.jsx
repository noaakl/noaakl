import React from "react";
import { useSelector } from "react-redux";
import styles from "./from_stix.module.scss";
import MappingItem from "./MappingItem";

const Mapping = () => {
  const mapping = useSelector((state) => state.fromStix.mapping);
  return (
    <>
      <div className="bx--row">
        <div className="bx--col">
          <h4 className="section-title">Mapping</h4>
        </div>
      </div>

      <div className="bx--row">
        <div
          className={`bx--col ${styles.full_height__col} ${styles.mapping__col}`}
        >
          <ul>
            {Object.keys(mapping).map((o) => (
              <MappingItem title={o} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Mapping;
