import React, { useState, useContext } from 'react';
import './UploadButton.scss';
import axios from 'axios';
import { FilesContext } from '../context/FilesContext';
import { AlertContext } from '../context/AlertContext';

const UploadButton = () => {
  const { addFile } = useContext(FilesContext);
  const { updateAlert } = useContext(AlertContext);

  const [uploadedFile, setUploadedFile] = useState({});
  const [fileName, setFileName] = useState('');

  function handleFile(e) {
    const file = e.target.files[0];
    const mbSize = e.target.files[0].size / 1024 / 1024; // in MB
    if (mbSize > 10) {
      updateAlert('File size exceeds 10 MB', 'WARNING');
      return;
    } else {
      setUploadedFile(file);
      setFileName(file.name);
    }
  }

  // Upload file handler
  const fileUploadHandler = async () => {
    const formData = new FormData();
    formData.append('imageFe', uploadedFile, fileName);
    try {
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      });
      if (res.status === 200) {
        updateAlert('File has been uploaded succesfully', 'SUCCESS');

        const { _id, name, size } = res.data;
        addFile(_id, name, size);
        return;
      }
      updateAlert(
        'Problem with uploading your file. Please try again.',
        'WARNING'
      );
    } catch (err) {
      updateAlert(
        'Problem with uploading your file. Please try again.',
        'WARNING'
      );
      throw new Error(err);
    }
  };

  return (
    <div>
      <input type='file' onChange={handleFile} />
      <button onClick={fileUploadHandler}>UPLOAD</button>
    </div>
  );
};

export default UploadButton;
