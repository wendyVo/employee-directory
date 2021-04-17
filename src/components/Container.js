import React from "react";
import "../css/style.css"

function Container(props) {
  return (
    <div className="container px-3 mb-5 empContainer">
        {props.children}
    </div>
)
}

export default Container;