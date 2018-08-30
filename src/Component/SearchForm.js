import React, { Component } from 'react';

class SearchForm extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Enter keywords" />
                        <button className="btn btn-info">Search</button>
                    </div>
                    <div className="btn btn-block btn-outline-secondary" onClick={() => this.changeStatus()}>Đóng</div>
                    <div className="btn btn-block btn-outline-info" onClick={() => this.changeStatus()}>Thêm</div>
                </div>
                <hr />
            </div>
        );
    }
}

export default SearchForm;