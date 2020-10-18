import React from "react";
import { useDispatch } from "react-redux";
import { addField } from "../../store/actions/from_stix";
import { AccordionItem } from "carbon-components-react";
import styles from "./from_stix.module.scss";

const AddFieldItems = ({ title, type, items }) => {
  const dispatch = useDispatch();

  return (
    <AccordionItem title={title}>
      <ul>
        {items.map((item) => (
          <li
            key={item.name}
            onClick={() => {
              dispatch(addField(type, item.name));
            }}
            className={styles.field__item}
          >
            {item.name} {item.required ? "(*)" : ""}
          </li>
        ))}
      </ul>
    </AccordionItem>
  );
};

export default AddFieldItems;
