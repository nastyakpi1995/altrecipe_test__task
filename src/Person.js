import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

import MaterialTable from 'material-table';

class Person extends React.Component {
  state = {
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      // {
      //   title: 'Birth Place',
      //   field: 'birthCity',
      //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      // },
    ]
  } 

  newData = (newData) => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        const data = [...this.state.columns.data];
        data.push(newData);
        // setState({ ...state, data });
      }, 600);
    })
  }

  render() {
    const { columns } = this.state;
    const { person } = this.props;
    console.log(person)

    return (
      <div className="shown-form">

         <MaterialTable
  title="People"
  columns={[...columns,  {
    title: 'location',
    field: 'birthCity',
    lookup: person.map((pers) =>  ({id: pers.birth_date}) ),
  }]
}
    data={person.map(pers => (
      {name: pers.name, surname: pers.name, birthYear: pers.birth_date, birthCity: 63 }))}
      editable={{
        onRowAdd: this.newData,
        onRowUpdate: '2',
        onRowDelete: '3',
      }}
/>
      </div>
    );
  }
}

// const Person = ({ person, handleDelete }) => {
//   const [state, setState] = React.useState({
//     columns: [
//       { title: 'Name', field: 'name' },
//       { title: 'Surname', field: 'surname' },
//       { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//       {
//         title: 'Birth Place',
//         field: 'birthCity',
//         lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//       },
//     ],
//     data: [
//       { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//       {
//         name: 'Zerya Betül',
//         surname: 'Baran',
//         birthYear: 2017,
//         birthCity: 34,
//       },
//     ],
//   });

//   return (
//     <MaterialTable
//       title="Editable Example"
//       columns={state.columns}
//       data={state.data}
//       editable={{
//         onRowAdd: newData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               const data = [...state.data];
//               data.push(newData);
//               setState({ ...state, data });
//             }, 600);
//           }),
//         onRowUpdate: (newData, oldData) =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               const data = [...state.data];
//               data[data.indexOf(oldData)] = newData;
//               setState({ ...state, data });
//             }, 600);
//           }),
//         onRowDelete: oldData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               const data = [...state.data];
//               data.splice(data.indexOf(oldData), 1);
//               setState({ ...state, data });
//             }, 600);
//           }),
//       }}
//     />
//   );
// }

export default Person;