import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        
        <nav>
          <Link to="/">Home</Link>  
          <Link to="add-books">Add Book</Link>  
          <Link to="show-books">Show Book</Link>  
         
        </nav>
    );
};

export default Navbar;