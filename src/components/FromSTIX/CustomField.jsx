import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCustomFieldModal } from "../../store/actions/from_stix";
import CustomFieldModal from "./CustomFieldModal";
import { Button } from "carbon-components-react";

const CustomField = () => {
  const dispatch = useDispatch();
  const modalShow = useSelector((state) => state.fromStix.modalShow);

  return (
    <div>
      <Button
        kind="tertiary"
        size="sm"
        onClick={() => {
          dispatch(showCustomFieldModal());
        }}
      >
        Custom Field
      </Button>
      {modalShow && <CustomFieldModal></CustomFieldModal>}
    </div>
  );
};

export default CustomField;
