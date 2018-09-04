import React, { Component } from 'react';

class SearchForm extends Component {
    displayButton = () => {
        if (this.props.hienThiForm === true) {
           return  <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}>Đóng</div>
        } else {
           return  <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}>Thêm</div>
        }
    }
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Enter keywords" />
                        <button className="btn btn-info">Search</button>
                    </div>

                    {this.displayButton()}
                </div>
                <hr />
            </div>
        );
    }
}

export default SearchForm;