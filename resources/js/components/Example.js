import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import PostReducer from "../reducer/postReducer";

import Navbar from "./Nabvar";
import FormCom from "./FormCom";
import AllPost from "./AllPost";
import Add from "./Add";
import Edit from "./Edit";

export default class Example extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Navbar />
                    <br />
                    <br />
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            {/* <FormCom /> */}
                            <Route path="/" exact component={FormCom} />
                            <Route path="/addPost" exact component={Add} />
                            <Route
                                path="/editPost/:id"
                                exact
                                component={Edit}
                            />
                        </div>
                        <div className="col-md-8">
                            <AllPost />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const store = createStore(PostReducer);

ReactDOM.render(
    <Provider store={store}>
        <Example />
    </Provider>,
    document.getElementById("example")
);
