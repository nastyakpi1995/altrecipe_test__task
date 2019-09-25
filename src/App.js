import React from 'react';
import './App.css';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import { Route, NavLink, Switch } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
              <ListItemIcon>
              <PermIdentityIcon />
              </ListItemIcon>
              <Typography variant="inherit">people</Typography>
            </NavLink>
          </MenuItem>
          <MenuItem>
          <NavLink
              to="/location:personLocal"
              className="page__people "
              activeClassName="ClassActive"
            >
                 <ListItemIcon>
                 <PersonPinCircleIcon />
              </ListItemIcon>
                  location
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
