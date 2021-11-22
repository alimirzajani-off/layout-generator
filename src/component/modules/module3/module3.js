import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./search";
import Layout from "./layout";

const ModuleThree = () => {
  const [layout, setlayout] = useState(false);
  let navigator = useNavigate();

  const handleDataList = (e) => {
    setlayout(e);
  };

  return (
    <div className="App">
      <Search DataList={handleDataList} />
      <Layout layout={layout} />
      <button className="btn btn-danger" onClick={() => navigator("/")}>
        back home
      </button>
    </div>
  );
};

export default ModuleThree;
