import React, { Component } from "react";

class Add extends Component {
    constructor() {
        super();

        this.state = {
            newsTitle: "",
            description: "",
            category_id: "",
            country_id: ""
        };
        this.handleSubmit = this.heandleInpurchange.bind();
        this.heandleInpurchange = this.heandleInpurchange.bind();
    }

    heandleInpurchange(e) {
        console.log(e.target.value);
        // this.setState({ [e.target.name]: [e.target.value] });
    }

    handleSubmit(e) {
        e.preventDefault;
        this.props.dispatch({
            type: "ADD_POST",
            post: this.state
        });
    }

    render() {
        return (
            <div>
                <h1>Add post</h1>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="newsTitle"
                            onChange={e => this.heandleInpurchange(e)}
                            value={this.state.newsTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            onChange={e => this.heandleInpurchange(e)}
                            value={this.state.description}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Category Id</label>
                        <input
                            type="text"
                            className="form-control"
                            name="category_id"
                            onChange={e => this.heandleInpurchange(e)}
                            value={this.state.category_id}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Country Id</label>
                        <input
                            type="text"
                            className="form-control"
                            name="country_id"
                            onChange={e => this.heandleInpurchange(e)}
                            value={this.state.country_id}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Add;
