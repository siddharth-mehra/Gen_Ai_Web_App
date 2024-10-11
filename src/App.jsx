import React from 'react'
import "./App.css"
const App = () => {
  return (
    <div className="App">
      <h1>Gen Ai Application</h1>

      <div className='form-container'>
        <form className='Query'>
          <label>Enter FirstName</label>
          <input className='query-input' type="text" placeholder="Enter FirstName"/>
          <label>Enter LastName</label>
          <input className='query-input' type="text" placeholder="Enter LastName"/>
          <label>Enter Query</label>
          <input className='query-input' type="text" placeholder="Enter your query"/>
        </form>
      </div>
    </div>
  )
}

export default App;
