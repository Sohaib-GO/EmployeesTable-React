import React, {useState} from "react";
import Grid from "./components/employees/Grid";
import data from "./components/employees/mock-data.json";
import AddEmployee from "./components/modal/list/form"
import "./App.css"
import EditModal from "./components/modal/list/editModal";

import { Context ,ContextProvider } from  "../src/context"

function App() {
  const [contacts, setContacts] = useState(data);

  return (

  <Context.Provider value={ [contacts, setContacts] }>
  <div>
  <div>
  <h1 style={{textAlign: 'center'}}>Employee List </h1>
</div>
<div><Grid />

<AddEmployee />
 </div>
</div>

  </Context.Provider>
    
  )
}

export default App;
