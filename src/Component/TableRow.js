import React, { Component } from 'react';

class TableRow extends Component {
    checkPermission = () => {
        if (this.props.per === 1) {
            return "Admin";
        } else if (this.props.per === 2) {
            return "Manage";
        } else {
            return "Member";
        }
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>
                    {
                        this.checkPermission()
                    }
                </td>
                <td>
                    <div className="btn btn-warning">
                        <i className="fa fa-edit edit">Sửa</i>
                    </div>
                    <div className="btn btn-danger">
                        <i className="fas fa-trash edit">Xóa</i>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableRow;