import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "products",
  initialState: {
    category: {
      sex: null,
      type: null,
      selected: "",
    },
    products: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category.sex = action.payload.sex;
      state.category.type = action.payload.type;
    },
    setSelected: (state, action) => {
      state.category.selected = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});
