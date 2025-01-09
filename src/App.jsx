import React from 'react'
import Test from './test';
//クローン
function App() {

  return (
    <React.Fragment>
      <h1 style={{
        paddingTop: '20px',
        textAlign: 'center',
        textShadow: '10px 10px 20px black'
      }}>React Playground</h1>

      <Test/>

    </React.Fragment>
  )
}

export default App

