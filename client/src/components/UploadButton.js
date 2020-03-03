import React, { useState } from 'react';
import './UploadButton.scss';
import Alert from './Alert';
import axios from 'axios';

const UploadButton = () => {
  const [uploadedFile, setUploadedFile] = useState({});
  const [fileName, setFileName] = useState('');
  const [alert, setAlert] = useState('');

  function handleFile(e) {
    // setUploadedFile(e.target.files, 'aa');
    console.log(e.target.files, 'a');
    const file = e.target.files[0];
    const mbSize = e.target.files[0].size / 1024 / 1024; // in MB
    if (mbSize > 10) {
      setAlert('File size exceeds 10 MB');
      // $(file).val(''); //for clearing with Jquery
      return;
    } else {
      setUploadedFile(file);
      setFileName(file.name);
    }
  }

  // Upload file handler
  const fileUploadHandler = async () => {
    const formData = new FormData();
    console.log(uploadedFile);
    console.log(fileName);
    formData.append('imageFe', uploadedFile, fileName);
    try {
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      });
      console.log(res);

      // const { fileName, filePath } = res.data;
      setAlert('File has been uploaded succesfully');
    } catch (err) {
      throw new Error(err);
    }
  };

  console.log(fileName, 'su');
  return (
    <div>
      {alert && <Alert message={alert} />}
      <input type='file' onChange={handleFile} />
      <button onClick={fileUploadHandler}>UPLOAD</button>
    </div>
  );
};

export default UploadButton;
