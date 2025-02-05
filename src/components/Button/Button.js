import styles from './Button.module.scss';

const TextInput = props => {
    return (<button className={styles.button}>{props.text}</button>);
};

export default TextInput;