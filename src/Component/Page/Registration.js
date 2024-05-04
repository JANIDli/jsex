import React, { Component } from 'react'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


export class Registration extends Component {
  render() {
    return (
      <div className='registration-container'>
        <div className="card">
          <h1>Sign-Up</h1>
          <form>
            <div className="input-list">
              <label htmlFor="Email" >Email</label>
              <input type="email" name='Email' />
            </div>
            <div className="input-list">
              <label htmlFor="name" >Name</label>
              <input type="text" name='name' />
            </div>
            <div className="input-list">
              <label htmlFor="password" >Password</label>
              <input type="password" name='password' />
            </div>
            <div className="input-list">
              <label htmlFor="Cpassword" >Comform Password</label>
              <input type="password" name='Cpassword' />
            </div>
            <br />
            <div className="registration-btn">
              <input type="submit"/>
            </div>
            <br />
            <p className='already'>Already have an accound? <Link to="/login">Login</Link> </p>
            <br />
            <p className='or'>Or</p>
            <div className="social-link">
             <FontAwesomeIcon icon={faFacebook} className='fb-icon' />
             <FontAwesomeIcon icon={faGoogle} className="google-icon" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Registration