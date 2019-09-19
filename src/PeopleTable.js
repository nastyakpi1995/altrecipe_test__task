import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { removePerson } from './getApi';
import './App.css';



class PeopleTable extends React.Component {
  state = {
    data: [],
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Job', field: 'job_title' },
      { title: 'Birth Year', field:'birth_date', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        // lookup: this.props.people.map(person => {person.id: person.name}),
      },
    ]
  }

  removePerson = (oldData) => {
    console.log(oldData)
    // this.refreshTodos();
    removePerson(oldData.tableData.id + 1);
  }

  addNewData = async (newData) => {
    // await  getcreate.addNewData(newData);
    // this.refreshTodos();
  };

  updatePerson = async (newData) => {
    console.log(newData)
  }
      

  render() {
    const { people } = this.props;
    const {columns} = this.state;
    console.log(people)
    
    return (
      <div className="shown-form">

      <MaterialTable
        title="People"
        columns={columns}
        data={ people}
         
          editable={{
            onRowAdd: this.newData,
            onRowUpdate: this.updatePerson,
            onRowDelete: this.removePerson,
          }}
        />
   </div>
    );
  }
}

PeopleTable.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PeopleTable;