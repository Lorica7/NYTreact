import React from "react";
import SaveBtn from "./SaveButton";



const Results = props => (
  <li className="list-group-item">
          <h3>{props.title}</h3>
          
          <a rel="noreferrer noopener" target="_blank" href={props.url}>
            Go to article
          </a>
          <SaveBtn/>
  </li>
);

export default Results;