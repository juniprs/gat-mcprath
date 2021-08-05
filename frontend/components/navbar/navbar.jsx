import React from "react";
import { Link } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";
import { IoPersonOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import Modal from "../modal/modal";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchhover: false, accounthover: false, show: false, showCheckout: false };
    this.handleSearchHover = this.handleSearchHover.bind(this);
    this.handleAccountHover = this.handleAccountHover.bind(this);
    // this.openModal = this.openModal.bind(this);
  }

  handleSearchHover = () => {
    this.setState({ searchhover: !this.state.searchhover });
  };

  handleAccountHover = () => {
    this.setState({ accounthover: !this.state.accounthover });
  };

  // openModal = () => {
  //   this.setState({ show: true });
  //   console.log(this.state);
  // };

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
            {this.state.searchhover ? "sb" : ""}
            <VscSearch size={19} color={"hsla(0, 0%, 90%, 0.60)"} />
          </li>
          <li>
            <a
              className="account-icon"
              href="/#/login"
              onMouseOver={this.handleAccountHover}
            >
              <IoPersonOutline size={19} color={"hsla(0, 0%, 90%, 0.60)"} />
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
            <a className="cart-icon" onClick={() => this.setState({ show: true })}>
              <BsBag size={19} color={"hsla(0, 0%, 90%, 0.60)"} />
            </a>
              <Modal show={this.state.show} showCheckout={this.state.showCheckout} onClose={() => this.setState({ show: false, showCheckout: false })} />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
