import React, { useContext } from 'react';
import axios from 'axios';
import { FilesContext } from '../context/FilesContext';

const FileDetails = ({ _id, name, size }) => {
  const { removeFile } = useContext(FilesContext);

  const deleteFile = async _id => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/files/${_id}`);
      removeFile(res.data._id);
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div>
      <p>{name}</p>
      <p>{size}</p>
      <button onClick={() => deleteFile(_id)}>delete</button>
    </div>
  );
};

export default FileDetails;
