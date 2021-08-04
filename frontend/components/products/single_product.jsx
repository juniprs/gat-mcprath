import React from "react";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import Modal from "../modal/modal";

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, show: false };
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  addToCart = () => {
    this.props.createCartItem({
      product_id: this.props.product.id,
    });
    this.setState({ show: true });
  };

  render() {
    return (
      <div className="single-product-wrapper">
        {this.props.product ? (
          <ul className="single-product-container">
            <img src={this.props.product.photo} className="photo" />
            <div className="product-info-container">
              <li className="name">{this.props.product.name}</li>
              <li className="price">${this.props.product.price}</li>
              <li className="colour">
                {this.props.product.colour
                  ? `Colour: ${this.props.product.colour}`
                  : ""}
              </li>
              <li>
                <a onClick={this.addToCart} className="add-product-bttn">
                  ADD TO BAG
                </a>
              </li>
              <hr />
              <a onClick={this.toggle} className="description-bttn">
                DESCRIPTION{" "}
                {this.state.isOpen ? (
                  <IoMdArrowDropdown size={20} />
                ) : (
                  <IoMdArrowDropright size={20} />
                )}
              </a>
              {this.state.isOpen ? (
                <p className="description">{this.props.product.description}</p>
              ) : (
                ""
              )}
            </div>
          </ul>
        ) : (
          ""
        )}
        <Modal
          show={this.state.show}
          onClose={() => this.setState({ show: false })}
        >
          <p>This is modal bod</p>
        </Modal>
      </div>
    );
  }
}

export default SingleProduct;
