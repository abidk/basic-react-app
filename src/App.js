import React from 'react';
import List from './components/organisms/List';
import Form from './components/organisms/Form';
import Names from './service/RetrieveNames';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Basic React App</h1>
      <div className="App-form">
        <Form />
      </div>
      <div className="App-items">
        <List names={Names} />
      </div>
    </div>
  );
}

export default App;
