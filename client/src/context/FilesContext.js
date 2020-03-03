import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FilesContext = createContext();

const FilesContextProvider = props => {
  const [files, setFiles] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get('http://localhost:3000/api/files');
    console.log(res.data);
    setFiles(res.data);
  };

  const addFile = (_id, name, size, data) => {
    setFiles([...files, { _id, name, size, data, img: { data } }]);
  };

  const removeFile = _id => {
    setFiles(files.filter(file => file._id !== _id));
  };

  const updateSearch = str => {
    setSearch(str);
  };

  console.log(files, 'from context');
  return (
    <FilesContext.Provider
      value={{ files, addFile, removeFile, search, updateSearch }}
    >
      {props.children}
    </FilesContext.Provider>
  );
};

export default FilesContextProvider;
