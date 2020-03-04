import React, { useContext } from 'react';
import { FilesContext } from '../context/FilesContext';
import './SearchInput.scss';

const SearchInput = () => {
  const { search, updateSearch } = useContext(FilesContext);
  const searchItems = e => {
    updateSearch(e.target.value.substr(0, 20));
  };

  return (
    <label>
      <input
        type='text'
        value={search}
        onChange={searchItems}
        id='search'
        placeholder='Search documents...'
      />
    </label>
  );
};

export default SearchInput;
