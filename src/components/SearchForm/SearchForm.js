import TextInput from "../TextInput/TextInput.js";
import styles from "./SearchForm.module.scss";
import Button from "../Button/Button.js";

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <Button text= "search" />
        </form>
    );
  };

  export default SearchForm;