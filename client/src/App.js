import React from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import UploadButton from './components/UploadButton';
import FilesList from './components/FilesList';
import FilesContextProvider from './context/FilesContext';

function App() {
  return (
    <div className='App'>
      <FilesContextProvider>
        <h1>Mirkooo</h1>
        <UploadButton />
        <FilesList />
      </FilesContextProvider>
    </div>
  );
}

export default App;
