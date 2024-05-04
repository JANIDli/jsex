import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-band">
          <a href="http://">JSEx</a>
        </div>
        <div className="nav-links">
          <a href="http://">HOME</a>
          <a href="http://">TRENDING</a>
          <a href="http://">AI</a>
          <a href="http://">SOCIAL MEDIA</a>
        </div>
        <div className="login-btn">
         <Link to="/register">Register</Link>
        </div>
      </div>
    );
  }
}

export default Nav;
