import TextInput from "../TextInput/TextInput.js";
import styles from "./SearchForm.module.scss";
import Button from "../Button/Button.js";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSearchString } from "../../redux/searchStringRedux.js";
import { useSelector } from "react-redux";


const SearchForm = () => {
    const searchString=useSelector(state=>state.searchString);
    const [searchInput, setSearchInput] = useState(searchString);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(updateSearchString(searchInput));
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