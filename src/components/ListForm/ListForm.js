import styles from './ListForm.module.scss'
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addList} from '../../redux/store';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ListForm = () => {
    const dispatch=useDispatch();

    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');

    const handleSubmit =e => {
        e.preventDefault();
        dispatch(addList({title, description}));
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.listForm}>
            <span>Title: </span>
            <TextInput type="text" value={title} onChange={e=> setTitle(e.target.value)}/>
            <span>Description: </span>
            <TextInput type="text" value={description} onChange={e=>setDescription(e.target.value)}/>
            <Button>
                <span>Add new list</span>
            </Button>
        </form>
    )
}
export default ListForm;