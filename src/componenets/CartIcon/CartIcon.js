import React from "react";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart-action";
import { selectCartItemsCount } from "../../redux/cart/cart-selector";
const CartIcon = ({ toggleCartHidden, countItems }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{countItems}</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = (state) => ({
  countItems: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
