import React from 'react';
import { Link, IndexLink } from 'react-router';
const Header = () => {
  return (
    <div>
   <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/labtests" activeClassName="active">Book a Diagnosis Test</Link>    
     {" | "}
      <Link to="/boards" activeClassName="active">Boards</Link>    
    </nav>
           
    
    </div>

    
  );
};

export default Header;