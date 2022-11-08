import React from 'react'
import Hero from '../Components/Elements/Hero'
// import Farmcard from './Farmcard'
import Choose from '../Components/Elements/Choose'
import Community from '../Components/Elements/Community'

function Home() {
  return (
    <div>
        <Hero/>
        {/* <Farmcard/> */}
        {/* <Farmcard/> */}
        <Choose/>
        <Community/>
    </div>
  )
}

export default Home