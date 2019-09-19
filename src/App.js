import React from 'react';
import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import PeoplePlace from './PeoplePlace';
import PeopleTable from './PeopleTable';
import NotFoundPage from './NotFoundPage';
import { getUser, getLocation } from './getApi';

  class App extends React.Component {
    state = {
      visiblePeople: [],
      location: [],
    };

    componentDidMount() {
      this.refreshPeople();
    }

    async refreshPeople() {
      const users = await getUser();
      const location = await getLocation();
      this.setState({
        visiblePeople: users.data,
        location: location.data,
      })
  }

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

    render() {
      const {
        shownForm,
        visiblePeople,
        location,
      } = this.state;
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
            <Route
                path="/location"
                exact
                render={({ match }) => (
                  <PeoplePlace
                  phoneId={match.params}
                  location={location}
                  people={visiblePeople}
                  />
                )}
              />
          <Route
            path="/people"
            render={() => (
              <PeopleTable
              people={visiblePeople}
              handleDelete={this.handleDelete}
              shownForm={shownForm}
              location={location}
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
