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
    <div className='flex-container-grid'>
      {files.length > 0 ? (
        <div className='meta-container'>
          <h3>{files.length} documents.</h3>{' '}
          <h3 className='right-align'>Total size</h3>
        </div>
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
