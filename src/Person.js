import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


const Person = ({ person, handleDelete }) => {
    console.log( person);
  return (
      person.map(pers => (
        <tr className="table">
        <td>{pers.id}</td>
        <td className="table">{pers.name}</td>
        <td className="table"> {pers.job_title}</td>
        <td className="table"> {pers.birth_date}</td> 
        <td className="table"> {pers.address}</td> 
        <button
          type="button"
          onClick={() => handleDelete(pers.id)}
          className="basketPage__table-quantity-plus"
        >
          remove
        </button>
      </tr>
      ))
   
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    born: PropTypes.number.isRequired,
    died: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    century: PropTypes.number.isRequired,
    mother: PropTypes.string,
    father: PropTypes.string,
    children: PropTypes.string,
  }).isRequired,
  selectedPerson: PropTypes.number,
  markByClick: PropTypes.func,
};

Person.defaultProps = {
  selectedPerson: null,
  markByClick: () => {},
};

export default Person;