import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { removePerson, getcreate, updatePerson } from './getApi';
import './App.css';



class PeopleTable extends React.Component {
  state = {
    data: [],
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Job', field: 'job_title' },
      { title: 'Birth Year', field:'birth_date', type: 'numeric' },
    ]
  }

  removePerson = (oldData) => {
    removePerson(oldData.tableData.id + 1);
  }

  addNewData = (newData) => {
    getcreate(newData);
  };

  update = async (newData) => {
    updatePerson(newData, newData.id)
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
        data={people}
          editable={{
            onRowAdd: this.addNewData,
            onRowUpdate: this.update,
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