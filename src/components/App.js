import React, { useState } from "react";
// import * as React from 'react';
import '../styles/App.css';
import Child from './Child'
const App = () => {
  let [currentBackground, setCurrentBackground] = useState({ background: "" })
  const changeColor = (childStyleHandler) => {
    childStyleHandler(currentBackground)
  }
  return (
    <div id="master">
      <h1 className="heading"> Parent</h1>
      <h5 className="heading"> Select the gradient then the Box to change color</h5>

      <div className="holder">
        <button className='btn-blue' onClick={() => { setCurrentBackground({ background: 'rgb(34, 193, 195)' }) }}> Blue</button>
        <button className='btn-orange' onClick={() => { setCurrentBackground({ background: 'rgb(221, 112, 18)' }) }}>Orange</button>
        <button className='btn-green' onClick={() => { setCurrentBackground({ background: 'rgb(44, 209, 88)' }) }}>Green</button>
      </div>

      <div className='holder child-holder' id="children-wrapper">
        <Child changeColor={changeColor} />
        <Child changeColor={changeColor} />
        <Child changeColor={changeColor} />
      </div>
    </div >
  )
}


export default App;
