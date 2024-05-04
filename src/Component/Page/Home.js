import React, { Component } from 'react'
import Nav from '../Nav'
import Tranding from '../Tranding'
import Hero from '../Hero'
 

export class Home extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Hero/>
        <Tranding/>
      </div>
    )
  }
}

export default Home