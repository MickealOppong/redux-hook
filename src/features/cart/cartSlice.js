import { createSlice } from "@reduxjs/toolkit";
import { getCartItems } from "./data";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase: (state, action) => {
      state.cartItems.find((item) => {
        if (item.id === action.payload) {
          item.amount = item.amount + 1;
        }
      })
    },
    decrease: (state, action) => {
      state.cartItems.find((item) => {
        if (item.id === action.payload) {
          item.amount = item.amount - 1;
        }
        if (item.amount < 1) {
          state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        }
      })
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
    },
    calcTotals: (state) => {
      let totalCost = 0;
      let totalQty = 0;
      state.cartItems.forEach(item => {
        totalQty += item.amount;
        totalCost += (item.amount * item.price)
      })
      state.amount = totalCost;
      state.total = totalQty;
    },
    clearItems: (state) => {
      state.cartItems = [];
    }

  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    })
    builder.addCase(getCartItems.rejected, (state) => {
      state.isLoading = false;
    })
  }
})
export const { increase, decrease, removeItem, calcTotals, clearItems } = cartSlice.actions;
export default cartSlice.reducer;