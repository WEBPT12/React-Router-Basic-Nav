import React from 'react';
// Inside of `Navigation.js` `import { Link } from 'react-router-dom'`.
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <Link className="" exact to="/">Home</Link>
        <Link className="" exact to="/about">About</Link>
        <Link className="" exact to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navigation;
