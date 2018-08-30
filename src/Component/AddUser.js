import React, { Component } from 'react';

class AddUser extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="card border-primary mb-3 mt-2">
                    <div className="card-header">Thêm mới</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" aria-describedby="helpId" placeholder="Tên" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                                <option >Admin</option>
                                <option >Member</option>
                            </select>
                        </div>
                        <button className="btn btn-primary">Thêm</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default AddUser;