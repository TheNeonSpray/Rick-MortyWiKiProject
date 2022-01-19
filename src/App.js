import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, {useState, useEffect} from "react";
import { Cards } from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters/>
          </div>
          <div className="col-8">
            <Cards/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
