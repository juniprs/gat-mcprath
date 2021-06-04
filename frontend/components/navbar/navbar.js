import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaSearch } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { BsBag } from 'react-icons/bs';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { searchhover: false, accounthover: false }
        this.handleSearchHover = this.handleSearchHover.bind(this);
        this.handleAccountHover = this.handleAccountHover.bind(this);
    }

    handleSearchHover = () => {
        this.setState({ searchhover: !this.state.searchhover })
    }

    handleAccountHover = () => {
        this.setState({ accounthover: !this.state.accounthover })
    }

  render() {
    return (
      <nav className="navbar">
          <h1 className="header"><a href="/#/">GAT McPRATH LABS</a></h1>
        <ul className="navbar-items">
          <li className="search-icon" onMouseOver={this.handleSearchHover}>
            {this.state.searchhover ? "search-bar-here" : ""}
            <FaSearch />
          </li>
          <li>
            <a
              className="account-icon"
              href="/#/login"
              onMouseOver={this.handleAccountHover}
            >
              <IoPersonOutline />
            </a>
            <li className="dropdown-items">
              {this.state.accounthover ? (
                <ul>
                  <li>
                    <a href="/#/login">LOG IN</a>
                  </li>
                  <li>
                    <a href="/#/register">CREATE ACCOUNT</a>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>
          </li>
          <li>
            <a className="cart-icon" href="#">
              <BsBag />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
