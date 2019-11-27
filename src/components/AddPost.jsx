import React, { Component } from "react";
import { connect } from "react-redux";
import { addPostAction } from "../store/actions/AddPostAction";
import { fetchSinglePost } from "../store/actions/SinglePostAction";
import { updatePostAction } from "../store/actions/UpdatePostAction";

const initialState = {
  id: null,
  title: "",
  img: "",
  desc: "",
  error: null
};

class AddPost extends Component {
  state = {
    post: this.props.post || {}
  };
  id = this.props.match.params.id;

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       post: props.post || initialState
  //     };
  //   }

  //   id = this.props.match.params.id;

  componentDidMount() {
    if (this.id) {
      this.props.fetchSinglePost(this.id);
    }
  }

  componentDidUpdate(prevprops, prevstate) {
    if (prevprops.post !== this.props.post) {
      if (this.props.post) {
        this.setState({ post: this.props.post });
      } else if (this.id) {
        this.setState({ error: "Post is not found" });
      }
    }
  }

  //   componentWillReceiveProps(nextProps) {
  //     if (nextProps.post !== this.props.post) {
  //       console.log("componentWillReceiveProps");
  //       this.setState({ post: nextProps.post });
  //     }
  //   }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log(props.post);
  //     if (state.post !== props.post) {
  //       return { post: props.post };
  //     } else return null;
  //     console.log("getDerivedStateFromProps");
  //     console.log({ propsPost: props.post, statePost: state.post });
  //     return null;
  //   }
  //   componentWillUpdate() {
  //     console.log("componentWillUpdate");
  //   }
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return (
  //       JSON.stringify(this.state.post) !== JSON.stringify(this.props.post) ||
  //       JSON.stringify(this.state.post) !== JSON.stringify(nextState.post)
  //     );
  //   }
  //   static getDerivedStateFromProps(nextprops, prevstate) {
  //     if (nextprops.post !== prevstate.post) {
  //       return { post: nextprops.post };
  //     } else return null;
  //   }

  //Handle_Change_Funtion

  handleChange = e => {
    const post = { ...this.state.post };
    post[e.target.name] = e.target.value;

    this.setState({ post });
  };

  //Form_Submition_Funtion
  handleSubmit = e => {
    e.preventDefault();
    if (this.props.match.params.id) {
      this.props.updatePostAction(this.state.post, this.id);
      this.setState({ post: initialState });
      alert("Post Added");
    } else {
      this.props.addPostAction(this.state.post);
      this.setState({ post: initialState });
      alert("Post Added");
    }
  };

  render() {
    const { title = "", img = "", desc = "" } = this.state.post;
    return (
      <React.Fragment>
        <article>
          <div style={{ margin: "0px 150px" }}>
            {this.id ? <h1>UPDATE POST</h1> : <h1>ADD POST</h1>}
            {this.state.error ? (
              this.state.error
            ) : (
              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  Title
                  <br />
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                    required
                  />
                  <br />
                  Img Url
                  <br />
                  <input
                    type="text"
                    name="img"
                    value={img}
                    onChange={this.handleChange}
                    style={{ marginBottom: "5px" }}
                    required
                  />
                  <br />
                  Description
                  <br />
                  <textarea
                    rows="4"
                    cols="50"
                    name="desc"
                    onChange={this.handleChange}
                    value={desc}
                    required
                  ></textarea>
                  <br />
                  {this.id ? (
                    <button type="submit">Update</button>
                  ) : (
                    <button type="submit">ADD</button>
                  )}
                </fieldset>
              </form>
            )}{" "}
          </div>
        </article>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  post: state.SinglePost.post
});

const mapDispatchToProps = { addPostAction, fetchSinglePost, updatePostAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost);
