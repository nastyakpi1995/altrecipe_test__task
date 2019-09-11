import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class NewPerson extends React.Component {
  state = {
    userMap: {
      name: '',
      born: null,
      job: '',
      address: '',
    },
    errorsMap: {
      address: '',
    },
  };

  handleFieldChange = (event) => {
    const { name, value } = event.target;

    this.setState(prevState => ({
      userMap: {
        ...prevState.userMap,
        [name]: (name === 'name') ? value.replace(/[^\w|\d]/, '') : value,
      },
      errorsMap: {
        ...prevState.errorsMap,
        [name]: '',
      },
    }));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { userMap } = this.state;
    const { onSubmit } = this.props;

      onSubmit(userMap);
      this.setState(prevState => ({
        userMap: {
          ...prevState.userMap,
          name: '',
          born: null,
          job: '',
          address: '',
        },
      }));
    }

  render() {
    const { closeForm } = this.props;
    const { userMap, errorsMap } = this.state;
    return (
      <div className="shown-form">
        <form
          className="form-wrap"
          onSubmit={this.handleFormSubmit}
        >
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            defaultValue={userMap.name}
            className="input"
            required="true"
            onChange={this.handleFieldChange}
          />
          <input
            type="text"
            placeholder="Enter the year of born"
            className="input"
            name="born"
            defaultValue={userMap.born}
            required="true"
            onChange={this.handleFieldChange}
          />
          {errorsMap.died && (
            <div className="error">{errorsMap.died}</div>
          )}
          <input
            type="text"
            placeholder="Enter address"
            className="input"
            name="job"
            defaultValue={userMap.job}
            required="true"
            onChange={this.handleFieldChange}
          />
          <button
            type="submit"
            className="btn-add"
          >
            Add
          </button>
          <button
            type="submit"
            className="btn-close"
            onClick={closeForm}
          >
            Close
          </button>
        </form>
      </div>
    );
  }
}

NewPerson.propTypes = {
  closeForm: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

NewPerson.defaultProps = {
  closeForm: () => {},
};

export default NewPerson;