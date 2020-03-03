import React, { useState, useContext } from 'react';
import './UploadButton.scss';
import Alert from './Alert';
import axios from 'axios';
import { FilesContext } from '../context/FilesContext';

const UploadButton = () => {
  const { addFile } = useContext(FilesContext);

  const [uploadedFile, setUploadedFile] = useState({});
  const [fileName, setFileName] = useState('');
  const [alert, setAlert] = useState('');

  function handleFile(e) {
    console.log(e.target.files, 'a');
    const file = e.target.files[0];
    const mbSize = e.target.files[0].size / 1024 / 1024; // in MB
    if (mbSize > 10) {
      setAlert('File size exceeds 10 MB');
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
        setAlert('File has been uploaded succesfully');

        const { _id, name, size } = res.data;
        addFile(_id, name, size);
        return;
      }
      setAlert('Problem with uploading your file. Please try again.');
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div>
      {alert && <Alert message={alert} />}
      <input type='file' onChange={handleFile} />
      <button onClick={fileUploadHandler}>UPLOAD</button>
    </div>
  );
};

export default UploadButton;
