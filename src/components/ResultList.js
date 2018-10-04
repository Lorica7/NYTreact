import React from "react";


 const ResultList = props => (
  <div class="card">
    <div className="card-body">
      <ul className="list-group">{props.children}</ul>
    </div>
  </div>
);
export default ResultList;