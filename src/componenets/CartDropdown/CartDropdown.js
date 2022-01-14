import React, { Component } from "react";
import "./cartDropdown.scss";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selector";
import {withRouter} from "react-router-dom"
import {toggleCartHidden} from '../../redux/cart/cart-action'
class CartDropdown extends Component {
  render() {
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {
            this.props.cartItems.length?
            this.props.cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          )):<span className="empty-message">Your cart is empty</span>}
        </div>
        <CustomButton onClick={()=>{this.props.history.push("./checkout");this.props.dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

