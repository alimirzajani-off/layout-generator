import React, { useState } from "react";
import Search from "./search";
import Layout from "./layout";

const ModuleOne = () => {
  const [layout, setlayout] = useState(false);

  const handleDataList = (e) => {
    setlayout(e.target.value);
  };

  return (
    <div className="App">
      <Search DataList={handleDataList} />
      <Layout layout={layout} />
    </div>
  );
};

export default ModuleOne;
