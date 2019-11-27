import React, { Component } from "react";
import { Link } from "react-router-dom";

const maxlength = 30;

class RenderPost extends Component {
  state = {};

  renderpost = posts => {
    return (
      <React.Fragment>
        {posts.map(p => {
          return (
            <article key={p.id}>
              <div className="article_image">
                <Link to={`/post/${p.id}`}>
                  <img src={p.img} alt="Post_Img" />
                </Link>
              </div>
              <div className="post">
                <h1 className="title">
                  <Link to={`/post/${p.id}`}>{p.title}</Link>
                </h1>
                {p.desc.length > maxlength ? (
                  <React.Fragment>
                    <p>{p.desc.substring(0, 70)}</p>
                    <Link className="read_more" to={`/post/${p.id}`}>
                      Continue Reading
                      <i className="read_more_arrow"></i>
                    </Link>
                  </React.Fragment>
                ) : (
                  <p>{p.desc.substring(0, 70)}</p>
                )}
              </div>
              <button
                style={{
                  marginTop: "20px",
                  border: "none",
                  padding: "6px",
                  background: "red",
                  color: "white"
                }}
                onClick={() => this.handleDelete(p.id)}
              >
                Delete
              </button>

              <Link
                style={{
                  background: "green",
                  marginLeft: "10px",
                  padding: "2px 15px 5px 15px",
                  textDecoration: "none"
                }}
                to={`/addPost/${p.id}`}
              >
                Edit
              </Link>
            </article>
          );
        })}
      </React.Fragment>
    );
  };
}

export default RenderPost;
