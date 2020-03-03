import React from 'react';
import './Alert.scss';

const Alert = ({ message }) => {
  return (
    <div className='warning-container'>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
