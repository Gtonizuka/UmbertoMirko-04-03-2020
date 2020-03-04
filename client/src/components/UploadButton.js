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
  const [active, setActive] = useState(false);

  function handleFile(e) {
    const file = e.target.files[0];
    // Avoid running function if a file is selected and then user select another file and cancel it
    if (file) {
      const mbSize = e.target.files[0].size / 1024 / 1024; // in MB
      if (mbSize > 10) {
        updateAlert('File size exceeds 10 MB', 'WARNING');
        return;
      } else {
        setUploadedFile(file);
        setFileName(file.name);
        setActive(true);
      }
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
        setActive(false);
        return;
      }
      updateAlert(
        'Problem with uploading your file. Please try again.',
        'WARNING'
      );
      setActive(false);
    } catch (err) {
      updateAlert(
        `Problem with uploading your file. ${err.response.data}`,
        'WARNING'
      );
      // throw new Error(err);
    }
  };

  return (
    <>
      <input type='file' onChange={handleFile} accept='image/jpeg, image/png' />
      <button onClick={fileUploadHandler} disabled={!active}>
        UPLOAD
      </button>
    </>
  );
};

export default UploadButton;
