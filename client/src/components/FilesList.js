import React, { useContext } from 'react';
import './FilesList.scss';
import { FilesContext } from '../context/FilesContext';
import FileDetails from './FileDetails';
import SearchInput from './SearchInput';

const FilesList = () => {
  const { files } = useContext(FilesContext);

  return (
    <div>
      <SearchInput />
      {files.length > 0 ? (
        <h2>{files.length} documents.</h2>
      ) : (
        <h2>There are no files! Please upload</h2>
      )}
      {files &&
        files.map(file => {
          const { _id, name, size } = file;
          return (
            <div className='box__container' key={file._id}>
              <FileDetails name={name} size={size} _id={_id} />
            </div>
          );
        })}
    </div>
  );
};

export default FilesList;
