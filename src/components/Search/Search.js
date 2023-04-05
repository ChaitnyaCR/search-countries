import { React, Component, useState } from "react";
import backgroungPic from "../../images/Flagmap.jpg";
import ApiCall from "../ApiCall/ApiCall";

export class Search extends Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid"
        style={{
          backgroundImage: `url(${backgroungPic}`,
          backgroundRepeat: "no-repeat",
          height: 1000,
        }}
      >
        <div className="container pt-5">
          <form className="d-flex " role="search">
            <input
              className="form-control me-2 mt-5 "
              type="search"
              placeholder="Search Country "
              aria-label="Search"
            />
            <button className="btn btn btn-light mt-5" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
          <div className="mt-5 ">
            <ApiCall />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
