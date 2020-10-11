import React from "react";
import { Accordion } from "carbon-components-react";

import styles from "./from_stix.module.scss";
import AddFieldItems from "./AddFieldItems";

const stixLanguage = [
  {
    title: "Artifact",
    type: "artifact",
    items: ["payload_bin"],
  },
  {
    title: "File",
    type: "file",
    items: ["name", "mime_type"],
  },
  {
    title: "IPv4 Address",
    type: "ipv4-addr",
    items: ["value"],
  },
];

const AddFields = () => {
  return (
    <>
      <div className="bx--row">
        <div className="bx--col">
          <h4 className="section-title">Add Fields</h4>
        </div>
      </div>

      <div className="bx--row">
        <div
          className={`bx--col ${styles.full_height__col} ${styles.add_fields__col}`}
        >
          <Accordion>
            {stixLanguage.map((o) => (
              <AddFieldItems title={o.title} type={o.type} items={o.items} />
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default AddFields;
