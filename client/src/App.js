import React from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import UploadButton from './components/UploadButton';
import FileContainer from './components/FilesContainer';

function App() {
  return (
    <div className='App'>
      <h1>Mirkooo</h1>
      <SearchInput />
      <UploadButton />
      <FileContainer />
    </div>
  );
}

export default App;
