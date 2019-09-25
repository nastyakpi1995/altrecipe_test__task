import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h4 title="j" className="navlink">Page not found <NavLink
        
        className="notfound"
        to="/people"
        exact
        title="here you "
      >
      please go here
      </NavLink></h4>
    <span>
     
    </span>
  </div>
);

export default NotFoundPage;