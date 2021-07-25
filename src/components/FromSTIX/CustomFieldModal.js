import React, { useState } from "react";
import { Modal, TextInput } from "carbon-components-react";
import { useDispatch, useSelector } from "react-redux";
import { closeCustomFieldModal, addField } from "../../store/actions/from_stix";

const CustomFieldModal = () => {
  const modalShow = useSelector((state) => state.fromStix.modalShow);
  const dispatch = useDispatch();
  const [customField, setCustomField] = useState("");
  const isValidCustomField = (customField) => {
    const re = /(^\S+:+\S+$)/;
    return re.test(customField);
  };

  return (
    <Modal
      open={modalShow}
      size="xs"
      modalHeading={"Add custom field"}
      primaryButtonText={"Add"}
      secondaryButtonText={"Cancel"}
      onRequestClose={() => {
        setCustomField("");
        dispatch(closeCustomFieldModal());
      }}
      onRequestSubmit={() => {
        const [type, key] = customField.split(":");
        dispatch(addField(type, key));
        setCustomField("");
        dispatch(closeCustomFieldModal());
      }}
      primaryButtonDisabled={!isValidCustomField(customField)}
      preventCloseOnClickOutside={true}
      shouldSubmitOnEnter={true}
      hasForm={true}
    >
      <TextInput
        id="customField"
        type="text"
        labelText={`e.g "x-oca-event:category_id"`}
        onChange={(e) => {
          setCustomField(e.target.value);
        }}
        invalid={customField !== "" && !isValidCustomField(customField)}
        invalidText="A valid value is required"
      />
    </Modal>
  );
};

export default CustomFieldModal;
