import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "products",
  initialState: {
    category: {
      sex: null,
      type: null,
    },
  },
  reducers: {
    setCategory: (state, action) => {
      state.category.sex = action.payload.sex;
      state.category.type = action.payload.type;
    },
  },
});
