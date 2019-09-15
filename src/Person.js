import React from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import MaterialTable from 'material-table';

class Person extends React.Component {
  state = {
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        // lookup: {() => suggestions(this.props.person)} ,
      },
    ]
  }

  // newData = (newData) => {
  //   new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve();
  //       const data = [...this.state.columns.data];
  //       data.push(newData);
  //       // setState({ ...state, data });
  //     }, 600);
  //   })
  // }

  render() {
    const { columns } = this.state;
    const { person } = this.props;
    console.log(person)

    return (
      <div className="shown-form">

         <MaterialTable
  title="People"
  columns={columns}
    data={person.map(pers => (
    //   <NavLink
    //   to="/location"
    //   className="Phones__page"
    //   // activeClassName="phoneClassActive"
    // >
      {name: pers.name, surname: pers.name, birthYear: pers.birth_date, 
        birthCity:  
      pers.address[0]
      }
      // </NavLink>
      ))}
      editable={{
        onRowAdd: this.newData,
        onRowUpdate: person.map(pers => ({...pers, birthCity: 63 })),
        onRowDelete: '3',
      }}
      
/>
      </div>
    );
  }
}

export default Person;