import React, { useState } from "react";
import Routes from "../frontend/routes/index";
import Alert from "./components/Alert/Alert";
import { AlertContext, UserContext } from "./context";

export default function App() {
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [user, setUser] = useState('');

  return (
    <AlertContext.Provider 
      value={{
        alertType,
        alertMessage,
        setAlertMessage,
        setAlertType
      }}
    >
      <Alert />
      {Routes}
    </AlertContext.Provider>
  )
}