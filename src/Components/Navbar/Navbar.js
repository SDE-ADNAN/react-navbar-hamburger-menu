import "./Navbar.css";

import React, { Component } from "react";
import { MenuItems } from "./MenuItem";

class Navbar extends Component {

    state={clicked :false}

    handleClick =()=>{
        this.setState({clicked:!this.state.clicked})
    }


  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">React <i className="fab fa-react"></i> </h1>
        <div className="menu-icon" style={{cursor:"pointer"}} onClick={this.handleClick}>
            <i className={this.state.clicked ?"fas fa-times": "fas fa-bars"}></i>
        </div>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key ={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
