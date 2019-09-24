import React from 'react';
import MaterialTable from 'material-table';
import people from './people';
import { NavLink } from 'react-router-dom';

const peoplePrepeared = people.map(a => ({
  ...a,
  name: <NavLink to={`/location${a.id}`}>{a.name}</NavLink>, 
}))


export default function PeopleTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Job', field: 'job_title' },
      { title: 'Birth Year', field: 'birth_date', type: 'numeric' },
    ],
    data: peoplePrepeared,
  });

  return (
    <MaterialTable
      title="People"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}