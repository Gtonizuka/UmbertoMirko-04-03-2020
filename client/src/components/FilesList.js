import React, { useContext } from 'react';
import './FilesList.scss';
import { FilesContext } from '../context/FilesContext';
import FileDetails from './FileDetails';

const FilesList = () => {
  const { files, search, updateSearch } = useContext(FilesContext);

  let filteredItems = files.filter(
    file => file.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  return (
    <div>
      {files.length > 0 ? (
        <h2>{files.length} documents.</h2>
      ) : (
        <h2>There are no files! Please upload</h2>
      )}
      {filteredItems &&
        filteredItems.map(file => {
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
