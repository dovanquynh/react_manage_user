import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import Table from './Table';
import AddUser from './AddUser';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="search-form">
          <div className="container">
            <div className="row">
            <SearchForm/>
            <Table/>
            <AddUser/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
