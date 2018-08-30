import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div className="col-9">
                <table className="table table-striped table-hover table-inverse ">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Số điện thoại</th>
                            <th>Chức vụ</th>
                            <th>Khác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Nguyễn Hồng Thuận</td>
                            <td>0123456789</td>
                            <td>Admin</td>
                            <td>
                                <div className="btn btn-warning">
                                    <i className="fa fa-edit edit">Sửa</i>
                                </div>
                                <div className="btn btn-danger">
                                    <i className="fas fa-trash edit">Xóa</i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Nguyễn Hải Phong</td>
                            <td>0123456789</td>
                            <td>Member</td>
                            <td>
                                <div className="btn btn-warning">
                                    <i className="fa fa-edit edit">Sửa</i>
                                </div>
                                <div className="btn btn-danger">
                                    <i className="fas fa-trash del">Xóa</i>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Table;