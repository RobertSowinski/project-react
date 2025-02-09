import { createStore } from 'redux';
import initialState from './initialstate';
import shortid from 'shortid';
import { createSelector } from 'reselect';
import { strContains } from '../utils/strContains';

initialState.searchString = initialState.searchString || '';

export const getAllColumns = (state) => state.columns;
// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });
export const toggleCardFavourite = payload => ({ type: 'TOGGLE_CARD_FAVOURITE', payload });

const getCards = (state) => state.cards;
const getSearchString = (state) => state.searchString;
const getColumnId = (_, columnId) => columnId;

export const getFilteredCards = createSelector(
  [getCards, getSearchString, getColumnId],
  (cards, searchString, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title.toLowerCase(), searchString.toLowerCase()))
);

export const getListById = createSelector(
    [state => state.lists, (_, listId) => listId],
    (lists, listId) => lists.find(list => list.id === listId)
  );
export const getColumnsByList = createSelector(
  [state => state.columns, (_, listId) => listId],
  (columns, listId) => columns.filter(column => column.listId === listId)
);
export const getFavouriteCards = createSelector(
    [getCards],
    (cards) => cards.filter(card => card.isFavourite === true)
  );
export const getAllList = (state) => state.lists;
export const addList = payload => ({ type: 'ADD_LIST', payload });


const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
        case 'UPDATE_SEARCHSTRING':
            return { ...state, searchString: action.payload };
        case 'ADD_LIST':
            return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }]};
        case 'TOGGLE_CARD_FAVOURITE':
            return { 
                ...state, 
                cards: state.cards.map(card => 
                (card.id === action.payload) ? { ...card, isFavourite: !card.isFavourite } : card
                ) 
            };
        default:
            return state;
    }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;