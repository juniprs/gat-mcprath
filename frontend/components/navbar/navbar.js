import React from "react";
import { Link } from 'react-router-dom';
import { VscSearch } from "react-icons/vsc";
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
        <h1 className="header">
          <Link to="/">GAT McPRATH LABS</Link>
        </h1>
        <ul className="products-link">
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
        </ul>
        <ul className="navbar-items">
          <li className="search-icon" onMouseOver={this.handleSearchHover}>
            {this.state.searchhover ? "search-bar-here" : ""}
            <VscSearch size={19} color={"hsla(0, 0%, 90%, 0.60)"} />
          </li>
          <li>
            <a
              className="account-icon"
              href="/#/login"
              onMouseOver={this.handleAccountHover}
            >
              <IoPersonOutline
                size={19}
                color={"hsla(0, 0%, 90%, 0.60)"}
              />
            </a>
            <li className="dropdown-items">
              {this.state.accounthover ? (
                this.props.currentUser ? (
                  <ul>
                    <li onClick={this.props.logout}>LOG OUT</li>
                  </ul>
                ) : (
                  <ul>
                    <li>
                      <a href="/#/login">LOG IN</a>
                    </li>
                    <li>
                      <a href="/#/register">CREATE ACCOUNT</a>
                    </li>
                  </ul>
                )
              ) : (
                ""
              )}
            </li>
          </li>
          <li>
            <a className="cart-icon" href="/#/">
              <BsBag size={19} color={"hsla(0, 0%, 90%, 0.60)"} />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
