import React, { Component } from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Tranding from './Tranding'

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