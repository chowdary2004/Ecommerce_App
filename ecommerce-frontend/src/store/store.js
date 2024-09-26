import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer, productDetailsReducer } from "../reducers/productReducer";
import { authReducer } from "../reducers/authReducer";

// Combine all reducers
const reducer = combineReducers({
  auth: authReducer, // handles authentication
  productList: productListReducer, // handles product list
  productDetails: productDetailsReducer, // handles product details
});

// Define initial state and middleware
const initialState = {};
const middleware = [thunk];

// Create store with middleware and Redux DevTools
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
