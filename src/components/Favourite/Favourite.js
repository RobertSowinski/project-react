import React from 'react';
import { useSelector } from 'react-redux';
import { getFavouriteCards } from '../../redux/cardsRedux';
import Card from '../Card/Card';
import styles from './Favourite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favourite = () => {
  const favouriteCards = useSelector(getFavouriteCards);

  if (favouriteCards.length === 0) {
    return <p>No cards...</p>;
  }

  return (
    <div>
      <PageTitle>Favourite</PageTitle>
      <ul className={styles.favourite}>
        {favouriteCards.map(card => (
            <Card key={card.id} {...card} />
        ))}
      </ul>
    </div>
  );
};

export default Favourite;