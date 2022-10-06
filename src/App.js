import React, { useState } from "react";
import Grid from "./components/employees/Grid";
import data from "./components/employees/mock-data.json";
import AddEmployee from "./components/modal/list/form";
import "./App.css";

import { Context } from "../src/context";

function App() {
  const [contacts, setContacts] = useState(data);

  return (
    // Context.Provider is used to pass the array data to all components
    <Context.Provider value={[contacts, setContacts]}>
      <div className="body">
        <div>
          <h1 style={{ textAlign: "center" }}>Employee List </h1>
        </div>
        <div>
          <Grid />

          <AddEmployee />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
