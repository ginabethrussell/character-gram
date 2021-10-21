import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import styles from '../styles/searchbar.module.css'
import Router from 'next/router'

export default function Searchbar({ names }) {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

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
        options={names}
        autoHighlight
        renderInput={(params) => <TextField {...params} label="Character" placeholder="Select a character" />}
      />
      <button className={styles.searchButton} onClick={handleSelect}>View</button>
    </div>
  )
};
