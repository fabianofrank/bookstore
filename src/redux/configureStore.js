import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import BookReducer from './books/books';

const reducer = combineReducers({
  books: BookReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
