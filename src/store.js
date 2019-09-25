/* eslint-disable react/react-in-jsx-scope */
// import thunk from 'redux-thunk';
import { createStore } from 'redux';
import people from './people';
import location from './location';


const SELECT_LOCATION = 'SELECT_LOCATION';

export const selectLocation = value => ({ type: SELECT_LOCATION, value });


const reducer = (state, action) => {
  switch (action.type) {
    case SELECT_LOCATION:
      return {
        ...state,
        setValue: action.value,
        value: action.value,
      }
    default:
      return state;
  }
};

const initialState = {
  people,
  location,
  value: [],
  setValue: [],
};

const store = createStore(
  reducer,
  initialState,
);

export default store;