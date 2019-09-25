import React from 'react';
import MaterialTable from 'material-table';
import people from './people';
import location from './location';
import { NavLink } from 'react-router-dom';

const peoplePrepeared = people.map(a => ({
  ...a,
  name: <NavLink to={`/location${a.id}`}>{a.name}</NavLink>,
  location: location.find(loc => (loc.id === a.id)).address, 
  city: location.find(loc => (loc.id === a.id)).id,
}))
let obj = {}
peoplePrepeared.forEach(element => (
  obj[element.id] = element.location
))
console.log(obj)
const suggestions = location.map(suggestion => ({
  value: suggestion.id,
  label: suggestion.address,
}));
console.log(suggestions)

export default function PeopleTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Job', field: 'job_title' },
      { title: 'Birth Year', field: 'birth_date', type: 'numeric' },
      {
        title: 'Location',
        field: 'city',
        lookup: obj,
      },
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