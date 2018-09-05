import React, { Component } from 'react';

class EditUser extends Component {
    //props.dataUserEditObject
    render() {
        return (
            <div className="card border-primary mb-3 mt-2">
                <div className="card-header">Sửa thông tin</div>
                <div className="card-body text-primary">
                <form>
                    <div className="form-group">
                        <input type="text" name="name" onChange={(event) => this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Tên" defaultValue={this.props.dataUserEditObject.name} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="tel" onChange={(event) => this.isChange(event)} className="form-control" aria-describedby="helpId" placeholder="Điện thoại" defaultValue={this.props.dataUserEditObject.tel} />
                    </div>
                    <div className="form-group">
                        <select className="form-control" name="permission" onChange={(event) => this.isChange(event)} required defaultValue={this.props.dataUserEditObject.permission} >
                            <option value={0} >Select</option>
                            <option value={1} >Admin</option>
                            <option value={2} >Member</option>
                        </select>
                    </div>
                    <button type="reset" className="btn btn-primary" onClick={() => this.props.changeEditUserStatus() } >Lưu </button>
                </form>
                </div>
            </div>
        );
    }
}

export default EditUser;