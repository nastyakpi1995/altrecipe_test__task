import React from 'react';
import Select from 'react-select';
import NoSsr from '@material-ui/core/NoSsr';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

class PeoplePlace extends React.Component {
  state = {
    value: [],
    setValue: [],
  }

  handleChangeValue = (value) => {
    this.setState({
      setValue: value,
      value,
    })
  }

  render() {
    const { location, people, personLocal } = this.props;
    const { setValue,value } = this.state;
    const suggestions = location.map(suggestion => ({
      value: suggestion.id,
      label: suggestion.address,
    }));
    const peopelePrepared = people.filter(person => person.id === +personLocal);
    const peopleWithLocal = people.filter(person => person.id === +value.value);

    return (
      <div>
        { personLocal 
        ?  peopelePrepared.map(person => (
          <Card key={person.id}>
           <CardContent>
           <Typography color="textSecondary" gutterBottom>
          {person.name}
        </Typography>
           {person.job_title}
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
           {person.job_title}
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
            placeholder="check locale please"
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
});

const mapDispatchToProps = dispatch => ({
  // loadTodos: () => dispatch(loadTodos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeoplePlace);