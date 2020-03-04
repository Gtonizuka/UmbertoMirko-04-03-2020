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
    try {
      const res = await axios.get('http://localhost:3000/api/files');
      setFiles(res.data);
    } catch (err) {
      throw new Error(err);
    }
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

  return (
    <FilesContext.Provider
      value={{ files, addFile, removeFile, search, updateSearch }}
    >
      {props.children}
    </FilesContext.Provider>
  );
};

export default FilesContextProvider;
