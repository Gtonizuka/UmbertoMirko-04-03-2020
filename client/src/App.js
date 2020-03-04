import React from 'react';
import FilesContextProvider from './context/FilesContext';
import AlertContextProvider from './context/AlertContext';
import LayoutContainer from './components/LayoutContainer';

function App() {
  return (
    <div className='App'>
      <FilesContextProvider>
        <AlertContextProvider>
          <LayoutContainer />
        </AlertContextProvider>
      </FilesContextProvider>
    </div>
  );
}

export default App;
