import React, { useContext } from 'react';
import axios from 'axios';
import { FilesContext } from '../context/FilesContext';
import { AlertContext } from '../context/AlertContext';
import formatBytes from '../utils/formatBytes';

const FileDetails = ({ _id, name, size }) => {
  const { removeFile } = useContext(FilesContext);
  const { updateAlert } = useContext(AlertContext);

  const deleteFile = async _id => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/files/${_id}`);
      if (res.status === 200) {
        updateAlert(
          `File ${res.data.name} has been removed succesfully`,
          'SUCCESS'
        );
        removeFile(res.data._id);
        return;
      }
      updateAlert(`Problem with deleting file.`, 'WARNING');
    } catch (err) {
      updateAlert(`Problem with deleting file.`, 'WARNING');
    }
  };

  return (
    <div>
      <p>{name}</p>
      <p>{formatBytes(size)}</p>
      <button className='button warning' onClick={() => deleteFile(_id)}>
        delete
      </button>
    </div>
  );
};

export default FileDetails;
