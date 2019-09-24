import React from 'react';
import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import PeoplePlace from './PeoplePlace';
import PeopleTable from './PeopleTable';
import NotFoundPage from './NotFoundPage';
// import { getUser, getLocation } from './getApi';

  const App = () => (
        <div className="App">
           <Paper>
        <MenuList>
          <MenuItem>
          <NavLink
              to="/people"
              className="page__people"
              activeClassName="ClassActive"
            >
        people
            </NavLink>
          </MenuItem>
          <MenuItem>
          <NavLink
              to="/location:personLocal"
              className="page__people "
              activeClassName="ClassActive"
            >
                <div className="App__basket__title">location</div>
            </NavLink>
          </MenuItem>
        </MenuList>
      </Paper>
          <Switch>
            <Route
                path="/location:personLocal?"
                exact
                render={({ match }) => (
                  <PeoplePlace
                    personLocal={match.params.personLocal}
                  />
                )}
              />
          <Route
            path="/people"
            render={() => (
              <PeopleTable/>
            )}
          />
          <Route
            path="*"
            component={NotFoundPage}
          />
        </Switch>
        </div>
      );


export default App;
