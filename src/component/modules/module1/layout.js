import React from "react";
import {
  DisplayDoubleXl,
  DisplayFourL,
  DisplayXl,
  DisplayXll,
  DisplayXllSM,
} from "../../layouts";

import "../layout.sass";

const Layout = (props) => {
  const display = () => {
    switch (props.layout) {
      case "XL":
        return <DisplayXl />;
      case "2XL":
        return <DisplayDoubleXl />;
      case "4L":
        return <DisplayFourL />;
      case "XL/2L":
        return <DisplayXll />;
      case "XL/L/2SM":
        return <DisplayXllSM />;
      default:
        return null;
    }
  };

  return <div className="layout-box">{display()}</div>;
};

export default Layout;
