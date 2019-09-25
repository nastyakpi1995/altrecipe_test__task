import React from 'react';
import MaterialTable from 'material-table';
import location from './location';

export default function PeopleTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'City', field: 'city' },
      { title: 'Address', field: 'address' },
      { title: 'Index', field: 'index', type: 'numeric' },
    ],
    data: location,
  });

  return (
    <MaterialTable
      title="Location"
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