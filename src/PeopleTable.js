import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person';
import './App.css';

class PeopleTable extends React.Component {
  columnNames = [
    'id',
    'name',
    'job_title',
    'birth_date',
    'address',
];

  state = {
    
  }

  render() {
    const { people, handleDelete } = this.props;
    return (
      <table className="PeopleTable">
        <thead>
          <tr className="thead">
            {this.columnNames.map(columnName => (
              <th key={columnName}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <Person
              key={Date()} 
              person={person}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

PeopleTable.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PeopleTable;