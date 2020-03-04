import React, { useContext } from 'react';
import './Alert.scss';
import { AlertContext } from '../context/AlertContext';

const Alert = () => {
  const { alert } = useContext(AlertContext);

  const setAlertStyle = () => {
    let alertStyle = {
      backgroundColor: 'transparent',
      color: 'black'
    };

    const { msg } = alert;

    if (msg === 'SUCCESS') {
      alertStyle = {
        backgroundColor: '#81b71a',
        color: '#155724'
      };
    } else if (msg === 'WARNING') {
      alertStyle = {
        backgroundColor: '#f8d7da',
        color: '#721c24'
      };
    }
    return alertStyle;
  };

  const alStyle = setAlertStyle();

  return (
    <div className='alert' style={alStyle}>
      <p>{alert.text}</p>
    </div>
  );
};

export default Alert;
