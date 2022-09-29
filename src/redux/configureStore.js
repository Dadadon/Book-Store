import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { checkStatusReducer } from './Categories/categories';
import { handleBookReducer } from './books/books';

const reducers = combineReducers({
  book: handleBookReducer,
  status: checkStatusReducer,
});

const storeConfig = configureStore({ reducer: reducers });

export default storeConfig;