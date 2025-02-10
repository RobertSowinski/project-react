import styles from "./Column.module.scss";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";
import { useSelector } from "react-redux";
import React from "react";
import { getFilteredCards } from '../../redux/cardsRedux';

const Column = ({ id, title, icon }) => {
    const cards = useSelector(state => getFilteredCards(state, id));
    //console.log('Column render');

    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + icon} />{title}</h2>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavourite={card.isFavourite}/> )}
            </ul>
            <CardForm columnId={id}></CardForm>
        </article>
    );
};

export default Column;
