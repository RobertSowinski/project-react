import { useDispatch } from 'react-redux';
import { toggleCardFavourite } from '../../redux/cardsRedux';
import clsx from 'clsx';
import styles from './Card.module.scss';

const Card = ({ id, title, isFavourite }) => {
    const dispatch = useDispatch();

    return (
        <li className={styles.card}>
            <h3>{title}</h3>
                <i className={clsx('fa fa-star-o', { [styles.active]: isFavourite }) } 
                onClick={() => dispatch(toggleCardFavourite(id))}>
                </i>
        </li>
    );
};

export default Card;
