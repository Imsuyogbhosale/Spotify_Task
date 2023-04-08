import React from "react";
import "./SidebarOption.css";

function SidebarOption({ option = "test" }) {
  return (
    <div className="sidebarOption">
      { <h4>{option}</h4> }
    </div>
  );
}

export default SidebarOption;