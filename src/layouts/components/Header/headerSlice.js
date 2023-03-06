import { createSlice } from "@reduxjs/toolkit";
import config from "~/config";

export default createSlice({
  name: "header",
  initialState: {
    navigation: config.texts.home,
  },
  reducers: {
    navigationChange: (state, action) => {
      state.navigation = action.payload;
    },
  },
});
