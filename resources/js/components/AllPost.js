import React, { Component } from "react";
import { connect } from "react-redux";

class AllPost extends Component {
    render() {
        console.log("all post", this.props.posts);
        if (!this.props.post) {
            return <span>Loding.....</span>;
        }

        const text = this.props.post.map((e, index) => {
            return (
                <div key={index} className="media">
                    <div className="media-left">
                        <a href="#">
                            <img className="media-object" src="..." alt="..." />
                        </a>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{e.newsTitle}</h4>
                        {e.description}
                    </div>
                </div>
            );
        });

        return <div>{text}</div>;
    }
}

const mapStateToProps = state => ({
    posts: state.post
});

export default connect(mapStateToProps)(AllPost);
