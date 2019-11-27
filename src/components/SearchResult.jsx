import React from "react";
import { connect } from "react-redux";
import { searchingPostsAction } from "../store/actions/SearchingPostsAction";
import RenderPost from "../components/RenderPost";

class SearchResult extends RenderPost {
  componentDidMount() {
    this.props.searchingPostsAction(this.props.match.params.query);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.query !== this.props.match.params.query) {
      this.props.searchingPostsAction(this.props.match.params.query);
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.SearchPosts
          ? this.renderpost(this.props.SearchPosts)
          : "Not FOUND"}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  SearchPosts: state.SearchResult.Searchposts
});

const mapDispatchtoProps = { searchingPostsAction };

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(SearchResult);
