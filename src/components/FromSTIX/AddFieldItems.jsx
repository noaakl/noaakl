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
            onClick={() => {
              dispatch(addField(type, item));
            }}
            className={styles.field__item}
          >
            {item}
          </li>
        ))}
      </ul>
    </AccordionItem>
  );
};

export default AddFieldItems;
