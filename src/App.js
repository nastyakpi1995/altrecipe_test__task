import React from 'react';
import './App.css';
// import {getUser} from './getApi';
import users from './user_lists';
import location from './location';
import PeopleTable from './PeopleTable';
import NewPerson from './NewPerson';

const prepared = users.map(user => user.data.map(us => {
  return (
    {
      ...us,
      address: location.map(u => u.data.find(u => u.id === us.id).address),
    })}
));

  class App extends React.Component {
    state = {
      visiblePeople: prepared,
      shownForm: false,
    };

  //   async componentDidMount() {
  //     const users = await getUser();
  //     console.log(users)
  //     this.setState({
  //       visiblePeople: users,
  //     })
  // }

    showForm = () => {
      this.setState({
        shownForm: true,
      });
    };
  
    closeForm = (event) => {
      event.preventDefault();
      this.setState({
        shownForm: false,
      });
    };

    handleDelete = (id) => {

      }
  
    addNewPerson = (newPerson) => {
      newPerson = {
        ...newPerson,
        id: this.state.visiblePeople.length + 1,
      };
      this.setState(prevState => ({
        visiblePeople: [...prevState.visiblePeople, newPerson],
        shownForm: false,
      }));
    }
  
    render() {
      const {
        shownForm,
        visiblePeople,
      } = this.state;
      console.log(visiblePeople)

      return (
        <div className="App">
          <button
            type="submit"
            className="btn-new-person"
            onClick={this.showForm}
          >
            Add a new person
          </button>
          {shownForm
          && (
            <NewPerson
              onSubmit={this.addNewPerson}
              closeForm={this.closeForm}
            />
          )}
          <h1>
            People table&nbsp;
            (
            {visiblePeople.map(a => a.length)}
            &nbsp;people)
          </h1>
       
          <PeopleTable
            people={visiblePeople}
            handleDelete={this.handleDelete}
          />
        </div>
      );
    }
  }
  

export default App;
