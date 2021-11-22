import React, { useState } from "react";
import Search from "./search";
import Layout from "./layout";

const ModuleThree = () => {
  const [layout, setlayout] = useState(false);

  const handleDataList = (e) => {
    setlayout(e);
  };

  return (
    <div className="App">
      <Search DataList={handleDataList} />
      <Layout layout={layout} />
    </div>
  );
};

export default ModuleThree;
