import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ModuleOne from "./component/modules/module1/module1";
import ModuleTwo from "./component/modules/module2/module2";
import ModuleThree from "./component/modules/module3/module3";
import "./App.sass";
import Home from "./component/home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="header">
          <ul>
            <li>
              <Link to="/module1">module1</Link>
            </li>
            <li>
              <Link to="/module2">module2</Link>
            </li>
            <li>
              <Link to="/module3">module3</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/module1" element={<ModuleOne />} />
          <Route path="/module2" element={<ModuleTwo />} />
          <Route path="/module3" element={<ModuleThree />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
