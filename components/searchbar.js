import React, { useState } from 'react';
import Router from 'next/router';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import styles from '../styles/searchbar.module.css';
import { useAppContext } from '../context/state';

export default function Searchbar() {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const { state } = useAppContext();

  const handleSelect = () => {
    if (inputValue.length > 0) {
      Router.push(`/star-wars/people/${value.id}`)
    }
  }

  return (
    <div className={styles.searchbarWrapper}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="character-select"
        sx={{ width: 3 / 4 }}
        options={state.names}
        autoHighlight
        renderInput={(params) => <TextField {...params} label="Character" placeholder="Select a character" />}
      />
      <button id="view-btn" className={styles.searchButton} onClick={handleSelect}>View</button>
    </div>
  );
}

