import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemsList from './components/ItemsList'

class App extends Component {
  render() {
    return (
        <div className="panel-body" style={{width: '300px',marginLeft: '500px',marginTop: '100px'}}>
            <div className="form-group">
                <h4>Filter Items:</h4>
                <input type="text" className="form-control" placeholder="search..." />
            </div>
            <div className="form-group">
                <button className="btn btn-primary" style={{marginLeft: '110px'}}>Search</button>
            </div>
        </div>

    );
  }
}

export default App;
