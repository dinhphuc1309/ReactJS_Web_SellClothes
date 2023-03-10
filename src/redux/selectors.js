//import { createSelector } from "@reduxjs/toolkit";

//header
export const stateNavSelector = (state) => state.header.navigation;

//products
export const categorySelector = (state) => state.products.category;
export const productsSelector = (state) => state.products.products;

//auth
export const messageRegisterSelector = (state) => state.auth.register.message;
