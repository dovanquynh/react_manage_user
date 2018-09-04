import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import Table from './Table';
import AddUser from './AddUser';
import DataUser from './Data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayForm: true,
      data: DataUser
    }
  }

  changeStatus = () => {
    this.setState({
      displayForm: !this.state.displayForm
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="search-form">
          <div className="container">
            <div className="row">
              <SearchForm ketNoi={() => this.changeStatus()} hienThiForm={this.state.displayForm} />
              <Table dataUserProps={this.state.data} />
              <AddUser displayForm={this.state.displayForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
