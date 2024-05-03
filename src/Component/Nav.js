import React, { Component } from 'react';

export class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-bar">
          <a href="http://">JSEx</a>
        </div>
        <div className="nav-links">
          <a href="http://">HOME</a>
          <a href="http://">TRENDING</a>
          <a href="http://">YOUTUBE</a>
          <a href="http://">SOCIAL MEDIA</a>
        </div>
        <div className="login-btn">
            <a href="http://">Login</a>
        </div>
      </div>
    );
  }
}

export default Nav;
