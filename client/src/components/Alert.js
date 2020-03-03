import React, { useContext } from 'react';
import './Alert.scss';
import { AlertContext } from '../context/AlertContext';

const Alert = () => {
  const { alert } = useContext(AlertContext);

  // const alertStyle = {
  //   backgroundColor: alert.color
  // };

  const setAlertStyle = () => {
    let alertStyle = {
      backgroundColor: 'white',
      color: 'black'
    };

    const { msg } = alert;

    if (msg === 'SUCCESS') {
      alertStyle = {
        backgroundColor: 'green',
        color: 'white'
      };
    } else if (msg === 'WARNING') {
      alertStyle = {
        backgroundColor: 'red',
        color: 'black'
      };
    }
    return alertStyle;
  };

  const alStyle = setAlertStyle();

  return (
    <div className='warning-container'>
      <p style={alStyle}>{alert.text}</p>
    </div>
  );
};

export default Alert;
