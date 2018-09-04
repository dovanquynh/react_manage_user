import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
    mappingData = () => { 
        return (
            this.props.dataUserProps.map((value, key) => (
            <TableRow userName={value.name}  key={key} stt={key} tel={value.tel} per={value.permission} /> 
            ))
        )
    }
    render() {
        return (
            <div className="col">
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
                        {this.mappingData()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Table;