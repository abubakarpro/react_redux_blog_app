import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="wrapper">
            <img src="img/logo.png" className="h_logo" alt="Blogin" title="" />
            <nav>
              <ul className="main_nav">
                <li>
                  <NavLink activeClassName="active" to="/">
                    All Posts
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/AddPost"> Add Posts</NavLink>
                </li>
                <li style={{ color: "white", margin: "55px 0px 0px 5px" }}>
                  <SearchBar {...this.props} />
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
