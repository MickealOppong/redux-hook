import { createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://course-api.com/react-useReducer-cart-project'
export const getCartItems = createAsyncThunk(
  'cart/getCartItems', async () => {
    try {
      const rs = await fetch(url);
      return await rs.json();
    } catch (er) {
      return er
    }
  }
)