import TextInput from "../TextInput/TextInput.js";
import styles from "./SearchForm.module.scss";
import Button from "../Button/Button.js";

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <Button><span className="fa fa-search" /></Button>
        </form>
    );
  };

  export default SearchForm;