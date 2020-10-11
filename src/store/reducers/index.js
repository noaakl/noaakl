import { combineReducers } from "redux";
import FromSTIXReducer from "./from_stix";

const combinedReducers = combineReducers({ fromStix: FromSTIXReducer });

export default combinedReducers;
