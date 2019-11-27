import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchSinglePost } from "../store/actions/SinglePostAction"


class SinglePost extends Component {
    state = {
        id: this.props.match.params.id
    }

    componentDidMount() {
        this.props.fetchSinglePost(this.state.id);
    }
    render() {
        return (
            <React.Fragment>
                <article >
                    <div className="article_image">
                        <img src={this.props.post.img} alt="Post_Img" />
                    </div>
                    <div className="post">
                        <h1 className="title">
                            {this.props.post.title}
                        </h1>
                        <p>
                            {this.props.post.desc}
                        </p>

                    </div>
                </article>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    post: state.SinglePost.post
});


const mapDispatchToProps = { fetchSinglePost }

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);