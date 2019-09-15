import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person';
import './App.css';

class PeopleTable extends React.Component {

  state = {
    
  }

  render() {
    const { people, handleDelete, } = this.props;
    return (
      <div>
          {people.map(person => (
            <Person
              key={Date()} 
              person={person}
              handleDelete={handleDelete}
            />
          ))}
          </div>
    );
  }
}

PeopleTable.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PeopleTable;