import React from "react";
import AddFields from "./AddFields";
import Mapping from "./Mapping";
import Export from "./Export";

const FromSTIX = () => {
  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col">
          <h1 className="page-title">From STIX</h1>
        </div>
      </div>

      <div className="bx--row">
        <div className="bx--col-sm-1">
          <AddFields />
        </div>

        <div className="bx--col-sm-2">
          <Mapping />
        </div>

        <div className="bx--col-sm-1">
          <Export />
        </div>
      </div>
    </div>
  );
};

export default FromSTIX;
