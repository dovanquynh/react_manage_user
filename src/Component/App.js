import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import Table from './Table';
import AddUser from './AddUser';
import DataUser from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayForm: true,
      data: [],
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }


  componentWillMount() {
    //kiem tra xem co localStorage chua
    if (localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }
    else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  editUser = (user) => {
    console.log(user);
    this.setState({
      userEditObject: user
    });

  }

  getDataNewUser = (name, tel, permission) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
    //day du lieu vao localStorage
    localStorage.setItem('userData', JSON.stringify(items));
  }

  changeStatus = () => {
    this.setState({
      displayForm: !this.state.displayForm
    });
  }

  getTextSearch = (data) => {
    this.setState({
      searchText: data
    });
  }
  getUserEditInfoApp = (info) => {
    console.log('thong tin da sua xong la ' + info.name);
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
    //day du lieu vao localStorage
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }

  deleteUser = (id) => {
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== id);
    this.setState({
      data: tempData
    });
    console.log(tempData);
    // tempData.forEach((value, key) => {
    //   if(value.id === id){
    //     console.log(key); 
    //   }
    // })


    //day du lieu vao localStorage
    localStorage.setItem('userData', JSON.stringify(tempData));
  }

  render() {
    //localStorage.setItem('userData',JSON.stringify(DataUser));
    var result = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        result.push(item);
      }
    })
    return (
      <div>
        <Header />
        <div className="search-form">
          <div className="container">
            <div className="row">
              <SearchForm
                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                dataEditUser={this.state.userEditObject}
                getTextSearchProps={(data) => this.getTextSearch(data)}
                ketNoi={() => this.changeStatus()}
                hienThiForm={this.state.displayForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
              />
              <Table
                deleteUser={(id) => this.deleteUser(id)}
                dataUserProps={result}
                editFuncApp={(user) => this.editUser(user)}
                changeEditUserStatus={() => this.changeEditUserStatus()}
              />
              <AddUser
                add={(name, tel, permission) => this.getDataNewUser(name, tel, permission)} displayForm={this.state.displayForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
