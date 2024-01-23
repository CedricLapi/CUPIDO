import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fairy from './components/Fairy'

function App() {

  return (
    <>
             <h1>Cupid's Matching Stats</h1>    
             <Fairy fairyName={"Aubrey"} fairyColor={"Black"} fairyBowType={"CrossBow"} fairyMatches={20} /> <hr/>
             <Fairy fairyName={"MarieAnne"} fairyColor={"Pink"} fairyBowType={"Compound"} fairyMatches={7} /> <hr />
             <Fairy fairyName={"Kevin"} fairyColor={"Blue"} fairyBowType={"Recurve"} fairyMatches={100} /> <hr />
    </>
  )
}

export default App
