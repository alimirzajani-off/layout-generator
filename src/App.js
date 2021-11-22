import React from "react";
import ModuleOne from "./component/modules/module1/module1";
import ModuleTwo from "./component/modules/module2/module2";
import ModuleThree from "./component/modules/module3/module3";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ModuleOne />
      <ModuleTwo />
      <ModuleThree />
    </div>
  );
}

export default App;
