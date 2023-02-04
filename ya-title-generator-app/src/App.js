import logo from './logo.svg';
import './App.css';
import React, { useEffect  } from 'react';

function randomItem(items){
  return items[Math.floor(Math.random()*items.length)];
}

function stringBuilder(data){
  var res = []
  var keys = ["articles","subject","preposition","descriptors", "conjunction", "descriptors"]
  for (var key of keys){
    res.push(randomItem(data[key]))
  }
  return(res.join(" "))
}

function App() {

  useEffect(() => {
    const data = require('./blocks.json');
    console.log(stringBuilder(data))
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
