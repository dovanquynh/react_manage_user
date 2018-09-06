import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj: {}
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfoApp(info);
    }

    isShowEditForm = () => {
        if (this.props.editUserStatus === true) {
            return <EditUser 
            getUserEditInfo = {(info) => this.getUserEditInfo(info)}
            changeEditUserStatus={() => this.props.changeEditUserStatus()}
            dataUserEditObject={this.props.dataEditUser}
            />
        }
    }
    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.getTextSearchProps(this.state.tempValue);
    }
    displayButton = () => {
        if (this.props.hienThiForm === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}>Đóng</div>
        } else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}>Thêm</div>
        }
    }
    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Enter keywords" onChange={(event) => this.isChange(event)} />
                        <button className="btn btn-info" onClick={(data) => this.props.getTextSearchProps(this.state.tempValue)}>Search</button>
                    </div>

                    {this.displayButton()}
                </div>
                <hr />
            </div>
        );
    }
}

export default SearchForm;