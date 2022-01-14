import React from "react";
import "./CheckOutItem.scss";
import {
  clearItemFromCart,
  decreaseItem,
  addItem,
} from "../../redux/cart/cart-action";
import { connect } from "react-redux";
const CheckOutItem = ({ cartItem, clearItem, decreaseItem, increaseItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => decreaseItem(cartItem)}>
          &#10094;
        </span>{" "}
        {quantity}{" "}
        <span className="arrow" onClick={() => increaseItem(cartItem)}>
          &#10095;
        </span>
      </span>
      <span className="price">${price}</span>
      <div
        className="remove-button"
        onClick={() => {
          clearItem(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (cartItem) => dispatch(clearItemFromCart(cartItem)),
  increaseItem: (cartItem) => dispatch(addItem(cartItem)),
  decreaseItem: (cartItem) => dispatch(decreaseItem(cartItem)),
});
export default connect(null, mapDispatchToProps)(CheckOutItem);
