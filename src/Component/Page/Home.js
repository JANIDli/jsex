import React, { Component } from 'react'
import Nav from '../Nav'
import Tranding from '../Tranding'
import Hero from '../Hero'
import { CustomSwiper } from '../CustomSwiper'



export class Home extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Hero/>
        <Tranding/>
        <br />
        <CustomSwiper/>
      </div>
    )
  }
}

export default Home