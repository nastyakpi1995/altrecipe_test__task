import React from 'react';
import MaterialTable from 'material-table';

class PeoplePlace extends React.Component {
  state = {
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Job', field: 'job' },
      { title: 'Birth Year', field: 'birthYear' },
    ]
  } 

  render() {
    const { people } = this.props;
    const { columns } = this.state;
    console.log(people);
    
    const data = people.forEach(element => (
      console.log( element.location)
      ))
    console.log(data)

    return (
      <div className="shown-form">

         <MaterialTable
  title="People"
  columns={columns}
    data={[{name: 'pers.address', job: 'pers.city'}] 
      // people.forEach(element => {
      // console.log(element.location.map(name => name.address))
      // element.location.map(pers => ({name: 'pers.address', job: 'pers.city' }))})
    }
/>
      </div>
    );
  }
}

export default PeoplePlace;