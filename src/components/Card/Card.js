import { useDispatch } from 'react-redux';
import { toggleCardFavourite, removeCard } from '../../redux/cardsRedux';
import clsx from 'clsx';
import styles from './Card.module.scss';

const Card = ({ id, title, isFavourite }) => {
    const dispatch = useDispatch();

    return (
        <li className={styles.card}>
            <h3>{title}</h3>
            <div>
                <i className={clsx('fa fa-star-o', { [styles.active]: isFavourite }) } 
                onClick={() => dispatch(toggleCardFavourite(id))}>
                </i>
                <i className="fa fa-trash" onClick={() => dispatch(removeCard(id))}></i>
            </div>
        </li>
    );
};

export default Card;
