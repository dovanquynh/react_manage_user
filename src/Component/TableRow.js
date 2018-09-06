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
    editClick = () => {
        this.props.editFunTableRow();
        this.props.changeEditUserStatus();
    }
    delClick = (id) => {
        this.props.delButtonClick(id);
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>
                    {
                        this.checkPermission()
                    }
                </td>
                <td>
                    <div className="btn btn-warning">
                        <i className="fa fa-edit edit" onClick={() => this.editClick()}>Sửa</i>
                    </div>
                    <div className="btn btn-danger">
                        <i className="fas fa-trash edit" onClick={(id) => this.delClick(this.props.id)}>Xóa</i>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableRow;