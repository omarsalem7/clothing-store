import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cart-reducer";
import { persistReducer } from "redux-persist";
import directoryReducer from "./directory/directory-reducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});
export default persistReducer(persistConfig, rootReducer);
