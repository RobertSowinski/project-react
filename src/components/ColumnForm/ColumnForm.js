import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';
import { useParams } from 'react-router-dom';

const ColumnForm = props => {
    const { listId } = useParams();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
    };

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm} >
            <span>Title:</span> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span>Icon:</span> <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;