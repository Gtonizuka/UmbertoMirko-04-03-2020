import React, { createContext, useState, useEffect } from 'react';

export const AlertContext = createContext();

const AlertContextProvider = props => {
  const [alert, setAlert] = useState({
    text: '',
    msg: ''
  });

  useEffect(() => {
    setAlert({
      ...props.value
    });
  }, [setAlert]);

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
