import React from 'react';
import './LayoutContainer.scss';
import SearchInput from './SearchInput';
import UploadButton from './UploadButton';
import FilesList from './FilesList';
import Alert from './Alert';

function LayoutContainer() {
  return (
    <div className='wrapper'>
      <Alert />
      <h1>Umberto Mirko Garozzo File Uploader</h1>
      <div className='flex-container'>
        <div className='flex-item col-lg'>
          <SearchInput />
        </div>
        <div className='flex-item col-sm'>
          <UploadButton />
        </div>
      </div>
      <FilesList />
    </div>
  );
}

export default LayoutContainer;
