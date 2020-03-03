import React, { createContext, useState, useEffect } from 'react';

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
