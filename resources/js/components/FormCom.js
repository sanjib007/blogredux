import React, { Component } from "react";

class FormCom extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Country</label>
                        <select className="form-control">
                            <option value="">--- select country ----</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Category</label>
                        <select className="form-control">
                            <option value="">--- select country ----</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default FormCom;
