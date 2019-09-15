import React from 'react';
import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import users from './user_lists';
import Paper from '@material-ui/core/Paper';
import PeoplePlace from './PeoplePlace';
import location from './location';
import PeopleTable from './PeopleTable';
import NotFoundPage from './NotFoundPage';

const prepared = users.map(user => user.data.map(us => {
  return (
    {
      ...us,
      location: location.map(u => u.data.find(u => u.id === us.id)),
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

    render() {

      const {
        shownForm,
        visiblePeople,
      } = this.state;
      console.log(visiblePeople);

      return (
        <div className="App">
           <Paper
           >
        <MenuList>
          <MenuItem>
          <NavLink
              to="/people"
              className="Phones__page"
              activeClassName="phoneClassActive"
            >
        people
            </NavLink>
          </MenuItem>
          <MenuItem>
          <NavLink
              to="/location"
              className="Phones__page page__basket"
              activeClassName="phoneClassActive"
            >
                <div className="App__basket__title">location</div>
            </NavLink>
          </MenuItem>
        </MenuList>
      </Paper>
          <Switch>
            {visiblePeople.map(people => (
                <Route
                path="/location"
                exact
                render={({ match }) => (
                  <PeoplePlace
                  phoneId={match.params}
                  people={people}
                  />
                )}
              />
            ))}
        
          <Route
            path="/people"
            render={() => (
              <PeopleTable
              people={visiblePeople}
              handleDelete={this.handleDelete}
              shownForm={shownForm}
              />
            )}
          />
          <Route
            path="*"
            component={NotFoundPage}
          />
        </Switch>
        </div>
      );
    }
  }


export default App;
