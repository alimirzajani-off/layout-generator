import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./search";
import Layout from "./layout";

const ModuleTwo = () => {
  const [layout, setlayout] = useState(false);
  let navigator = useNavigate();

  const handleDataList = (e) => {
    setlayout(e.target.value);
  };

  return (
    <div className="App">
      <Search DataList={handleDataList} />
      <Layout layout={layout} />
      <button className="btn btn-light" onClick={() => navigator("/")}>
        back home
      </button>
    </div>
  );
};

export default ModuleTwo;
