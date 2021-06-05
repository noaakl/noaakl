import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Dropdown} from "carbon-components-react";
import {changeStixVersion} from "../../store/actions/from_stix";

import stixLangV2 from "../../global/stixLangV2";
import stixLangV2_1 from "../../global/stixLangV2_1";
import "./ChangeVersion.css"

const itemstest = [
    {
        id: 0,
        label: 'STIX version 2.0',
    },
    {
        id: 1,
        label: 'STIX version 2.1',

    }
];

function title(){
    return<div>
        <ul className="change-title">
            <li>Please select a STIX version</li>
            <li>The default version is 2.0</li>
        </ul>
    </div>

}
const ChangeVersion = (props) => {
    const dispatch = useDispatch();
    const stixVersion = useSelector((state) => state.fromStix.stixFields);
    return (
        <div>
        <Dropdown

            ariaLabel="Dropdown"
            label="Please select a STIX version"
            id="carbon-dropdown-version-of-stix"
            titleText= {title()}

            items={itemstest}
            onChange={(event) => {dispatch(changeStixVersion(event.selectedItem.id));/*{console.log(stixVersion)}; */props.setField(event.selectedItem.id===1? stixLangV2_1: stixLangV2)}}

        />

        </div>
    );
}

export default ChangeVersion;
