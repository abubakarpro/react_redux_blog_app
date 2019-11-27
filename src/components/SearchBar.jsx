import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    query: ""
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSearch = e => {
    e.preventDefault();

    this.props.history.push({
      pathname: `/search/${this.state.query.replace(/\s/g, "")}`,
      state: { mydata: "sadas" }
    });
    this.setState({ query: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <input
          type="text"
          name="search"
          onChange={this.handleChange}
          value={this.state.query}
        />
        <button style={{ marginLeft: "3px" }} type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
