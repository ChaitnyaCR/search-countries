import { React, Component } from "react";

export class Header extends Component {
  render() {
    return (
      <nav className=" navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            COUNTRIES
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
