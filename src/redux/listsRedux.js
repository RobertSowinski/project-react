import shortid from "shortid";
import { createSelector } from 'reselect';

//selectors
export const getAllList = (state) => state.lists;
//memoizacja getListbyId
export const getListById = createSelector(
    [state => state.lists, (_, listId) => listId],
    (lists, listId) => lists.find(list => list.id === listId)
  );
//actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

//action creators
export const addList = payload => ({ type: ADD_LIST, payload });
const listsReducer = (statePart = [], action) => {
    switch (action.type) {
      case ADD_LIST:
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    };
  };
  
  export default listsReducer;