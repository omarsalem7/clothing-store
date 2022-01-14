import { createSelector } from "reselect";
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, currentItem) =>
        accumalatedQuantity + currentItem.quantity,
      0
    )
);
export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedPrice, currentItem) =>
        accumalatedPrice + currentItem.quantity * currentItem.price,
      0
    )
);
