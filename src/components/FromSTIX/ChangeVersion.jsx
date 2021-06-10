import React from "react";
import { useDispatch } from "react-redux";
import {Dropdown} from "carbon-components-react";
import {changeStixVersion} from "../../store/actions/from_stix";

const stixVersionsList = [
    {
        id: "stix_version_2_0",
        label: 'STIX version 2.0',
    },
    {
        id: "stix_version_2_1",
        label: 'STIX version 2.1',
    }
];


const ChangeVersion = () => {
    const dispatch = useDispatch();
    return (
        <div>
        <Dropdown
            ariaLabel="Dropdown"
            label="STIX version 2.0"
            id="carbon-dropdown-version-of-stix"
            items={stixVersionsList}
            onChange={(event) => { dispatch(changeStixVersion(event.selectedItem.id));}}
        />
        </div>
    );
}

export default ChangeVersion;
