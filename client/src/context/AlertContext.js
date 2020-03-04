import React, { createContext, useState, useContext } from 'react';

export const useAlertContext = () => useContext(AlertContext);

export const AlertContext = createContext();

const AlertContextProvider = props => {
  const [alert, setAlert] = useState({
    text: '',
    msg: ''
  });

  const updateAlert = (text, msg) => {
    setAlert({
      text,
      msg
    });
  };
  return (
    <AlertContext.Provider value={{ alert, updateAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
