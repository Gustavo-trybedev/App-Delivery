import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // action.payload: {
      //   id: number,
      //   name: string,
      //   price: number,
      //   quantity: number,
      //   urlImage: string,
      // }
      const { id } = action.payload;
      const index = state.items.findIndex((e) => e.id === id);
      if (index >= 0) return;
      const item = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity,
        urlImage: action.payload.urlImage,
      };
      state.items.push(item);
    },
    changeQuantity: (state, action) => {
      // action.payload: {
      //   id: number,
      //   quantity: number,
      // }
      const { id, quantity } = action.payload;
      const index = state.items.findIndex((e) => e.id === id);
      if (index < 0) return;
      state.items[index].quantity = quantity;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, changeQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
