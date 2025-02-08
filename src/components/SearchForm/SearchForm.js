import TextInput from "../TextInput/TextInput.js";
import styles from "./SearchForm.module.scss";
import Button from "../Button/Button.js";
import React, { useState } from "react";
import { useDispatch } from "react-redux";


const SearchForm = () => {
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchInput });
    };
    return (
        <form onSubmit={handleSearch} className={styles.searchForm}>
            <TextInput 
                placeholder="Search..." 
                value={searchInput} 
                onChange={handleInputChange} 
            />
            <Button><span className="fa fa-search" /></Button>
        </form>
    );
  };

  export default SearchForm;