import React from "react";
import { connect } from "react-redux";

import { fetchingAllPosts } from "../store/actions/FetchingAllPostAction";
import { deletePost } from "../store/actions/DeletePostAction";
import RenderPost from "../components/RenderPost";

class DisplayPost extends RenderPost {
  state = {};

  componentDidMount() {
    this.props.fetchingAllPosts();
  }

  handleDelete = id => {
    this.props.deletePost(id);
  };
  render() {
    return <React.Fragment>{this.renderpost(this.props.posts)}</React.Fragment>;
  }
}
const mapStateToProps = state => ({
  posts: state.Posts.posts
});

const mapDispatchToProps = { fetchingAllPosts, deletePost };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayPost);
