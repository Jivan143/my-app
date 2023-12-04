import React from "react";

const TextField = ({ selectedCharacters }) => (
  <div className="row mt-3">
    <div className="col-8">
      <input
        type="text"
        className="form-control"
        value={selectedCharacters}
      />
    </div>
  </div>
);

export default TextField;
