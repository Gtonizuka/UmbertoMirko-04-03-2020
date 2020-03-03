import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FilesContainer.scss';

const FileContainer = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    console.log('USE EFFECT');
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get('http://localhost:3000/api/files');
    console.log(res.data);
    setFiles(res.data);
  };

  const deletFile = async id => {
    const res = await axios.delete(`http://localhost:3000/api/files/${id}`);
    console.log(res.data);
  };

  console.log(files, 'SUCC');
  return (
    <div>
      {files &&
        files.map(file => {
          return (
            <div className='box__container' key={file._id}>
              <p>{file.name}</p>
              <p>{file.size}</p>
              <button onClick={() => deletFile(file._id)}>Delete</button>
            </div>
          );
        })}
      <h1>X DOCUMENTS</h1>
    </div>
  );
};

export default FileContainer;
