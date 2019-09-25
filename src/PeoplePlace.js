import React from 'react';
import Select from 'react-select';
import NoSsr from '@material-ui/core/NoSsr';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { selectLocation } from './store';
import Divider from '@material-ui/core/Divider';

class PeoplePlace extends React.Component {
  handleChangeValue = (value) => {
    this.props.selectLocation(value);
  }

  render() {
    const { location, people, personLocal, setValue, value } = this.props;
    const suggestions = location.map(suggestion => ({
      value: suggestion.id,
      label: suggestion.address,
    }));
    
    const peopelePrepared = people.filter(person => person.id === +personLocal);
    const peopleWithLocal = people.filter(person => person.id === +value.value);
    const LocationWithPeole = location.filter(person => person.id === +value.value);
    const LocationPrepared = location.filter(person => person.id === +personLocal);

    return (
      <div>
        { personLocal 
        ?  peopelePrepared.map(person => (
          <Card key={person.id}>
           <CardContent>
           <Typography color="textSecondary" gutterBottom>
          {person.name}
        </Typography>
        <Divider />
        Job
        <Divider />
           {person.job_title}
           <Divider />
           Adrress
           <Divider />
           {LocationPrepared.map(city => (city.address))}
           <Divider />
           City
             <Divider />
             {LocationWithPeole.map(city => city.city) }
           </CardContent>
          </Card>
          )
        )
         : ''
        } 
        { personLocal && Number.isInteger(+value.value)
        ?  peopleWithLocal.map(person => (
          <Card  key={person.id}>
           <CardContent>
           <Typography color="textSecondary" gutterBottom>
          {person.name}
        </Typography>
        <Divider />
          Job
          <Divider />
          {person.job_title}
          <Divider />
            Address
          <Divider />
          {LocationWithPeole.map(city => city.address) }
          <Divider />
          City
          <Divider />
          {LocationWithPeole.map(city => city.city) }
          </CardContent>
          </Card>
          )
        )
         : ''
        } 
        <NoSsr>
          <Select
            inputId="react-select-value"
            TextFieldProps={{
              label: 'Countries',
              InputLabelProps: {
                htmlFor: 'react-select-value',
              },
            }}
            placeholder="select location please"
            options={suggestions}
            value={setValue}
            onChange={this.handleChangeValue}
          />
        </NoSsr>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location,
  people: state.people,
  value: state.value,
  setValue: state.setValue,
});

const mapDispatchToProps = dispatch => ({
  selectLocation: value => dispatch(selectLocation(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeoplePlace);