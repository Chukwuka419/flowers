import React from 'react'
import "./App.css"
import Background from "./image/flawers.jpg"
import Login from './componets/Login';

const App = () => {
  return (


    <div className='App'>
<div className="background">
<img cl src={Background} alt="flawers.jpg" />
</div>
      <Login/>

    </div>
  )
}

export default App;
