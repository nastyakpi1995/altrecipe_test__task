/* eslint-disable react/react-in-jsx-scope */
// import thunk from 'redux-thunk';
import { createStore } from 'redux';
import people from './people';
import location from './location';


const DELETED_PERSON = 'DELETED_PERSON';

export const deleted_person = value => ({ type: DELETED_PERSON, value: value });


const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  people,
  location,
  columns: [
    { title: 'Name', field: 'name' },
    { title: 'Job', field: 'job_title' },
    { title: 'Birth Year', field:'birth_date', type: 'numeric' },
  ],
};

const store = createStore(
  reducer,
  initialState,
);

export default store;