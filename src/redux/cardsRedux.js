import shortid from 'shortid';
import { createSelector } from 'reselect';
import { strContains } from '../utils/strContains';
import initialState from './initialstate';

initialState.searchString = initialState.searchString || '';

//selectors
const getCards = (state) => state.cards;
const getSearchString = (state) => state.searchString;
const getColumnId = (_, columnId) => columnId;

export const getFavouriteCards = createSelector(
  [getCards],
  (cards) => cards.filter(card => card.isFavourite === true)
);

export const getFilteredCards = createSelector(
  [getCards, getSearchString, getColumnId],
  (cards, searchString, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title.toLowerCase(), searchString.toLowerCase()))
);
export const getCardById = createSelector(
    [getCards, (_, cardId) => cardId],
    (cards, cardId) => cards.find(card => card.id === cardId)
);
//actions
const createActionName = name => `app/cards/${name}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVOURITE = createActionName('TOGGLE_CARD_FAVOURITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');

//action creators
export const removeCard = payload => ({ type: REMOVE_CARD, payload });
export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleCardFavourite = payload => ({ type: TOGGLE_CARD_FAVOURITE, payload });

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case TOGGLE_CARD_FAVOURITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavourite: !card.isFavourite } : card);
    case REMOVE_CARD:
        return statePart.filter(card => card.id !== action.payload);
    default:
      return statePart;
  }
};

export default cardsReducer;