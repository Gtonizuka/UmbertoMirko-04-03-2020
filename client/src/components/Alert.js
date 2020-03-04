import React, { useContext } from 'react';
import './Alert.scss';
import { AlertContext } from '../context/AlertContext';

const Alert = () => {
  const { alert } = useContext(AlertContext);
  const { msg } = alert;

  const msgStyle = msg.toLowerCase();
  return (
    <div className={`alert ${msg}`}>
      <p data-test='alert-para'>{alert.text}</p>
    </div>
  );
};

export default Alert;
