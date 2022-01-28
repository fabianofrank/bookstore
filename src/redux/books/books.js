/* eslint-disable no-return-assign */
import { fetchBook, postBook, deleteBook } from '../api';

// ACTION TYPES
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD_BOOK = 'bookStore/books/LOAD_BOOK';

// ACTIONS
export const addBook = (payload) => async (dispatch) => {
  await postBook(payload);
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => async (dispatch) => {
  await deleteBook(payload);
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

export const loadBook = () => async (dispatch) => {
  const booksArray = await fetchBook();
  const books = [];
  [...Object.entries(booksArray)].forEach((b) => {
    const book = {
      item_id: b[0],
      title: b[1][0].title,
      category: b[1][0].category,
    };
    books.push(book);
  });
  dispatch({
    type: LOAD_BOOK,
    payload: books,
  });
};

// REDUCER
const BookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case LOAD_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default BookReducer;
