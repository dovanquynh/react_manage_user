import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            tel: '',
            permission: ''
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
        //package to item
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;
    }
    checkStatus = () => {
        if (this.props.displayForm === true) {
            return (
                <div className="card border-primary mb-3 mt-2">
                    <div className="card-header">Thêm mới</div>
                    <div className="card-body text-primary">
                    <form>
                        <div className="form-group">
                            <input type="text" name="name" onChange={(event) => this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Tên" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="tel" onChange={(event) => this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
                        </div>
                        <div className="form-group">
                            <select className="form-control" name="permission" onChange={(event) => this.isChange(event)} required>
                                <option value={0} >Select</option>
                                <option value={1} >Admin</option>
                                <option value={2} >Member</option>
                            </select>
                        </div>
                        <button type="reset" className="btn btn-primary" onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)}>Thêm</button>
                    </form>
                    </div>
                </div>
            )
        }
    }
    render() {

        return (
            <div>
                {this.checkStatus()}
            </div>

        );
    }
}

export default AddUser;