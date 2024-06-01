import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  userInfo: null,
};

export const messhoSlice = createSlice({
  name: "meesho",
  initialState,
  reducers: {
    // ============= Product Reducers Start here ===============
    // Add to cart
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    //Increase Quantity
    increaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    //decrease Quantity
    decreaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    // Delete item from cart
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    // Reset cart to initial state
    resetCart: (state) => {
      state.products = [];
    },
   
    // User authentication
    setUserInfo:(state,action)=>{
      state.userInfo = action.payload
    }
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
  setUserInfo

} = messhoSlice.actions;
export default messhoSlice.reducer;