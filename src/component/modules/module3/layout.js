import React from "react";
import * as Layouts from "../../layouts";
import "../layout.sass";

const Layout = (props) => {
  const display = () => {
    const Display = Layouts[`${props.layout}`];
    if (!props.layout) {
      return null;
    }
    return <Display />;
  };

  return <div className="layout-box">{display()}</div>;
};

export default Layout;
