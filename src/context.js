import React, { useState, createContext } from "react";
import data from "../src/components/employees/mock-data.json";

export const Context = React.createContext();

export const ContextProvider = () => {
  const [contacts, setContacts] = useState(data);
};
