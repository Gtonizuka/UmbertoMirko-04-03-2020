import React from 'react';
import './LayoutContainer.scss';
import SearchInput from './SearchInput';
import UploadButton from './UploadButton';
import FilesList from './FilesList';
import Alert from './Alert';

function LayoutContainer() {
  return (
    <div className='container'>
      <Alert />
      <h1>UMG File Uploader</h1>
      <UploadButton />
      <SearchInput />
      <FilesList />
    </div>
  );
}

export default LayoutContainer;
