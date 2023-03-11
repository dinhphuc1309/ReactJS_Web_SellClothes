import { createSelector } from "@reduxjs/toolkit";

//header
export const stateNavSelector = (state) => state.header.navigation;

//products
export const categorySelector = (state) => state.products.category;
export const productsSelector = (state) => state.products.products.data;
export const currentPageSelector = (state) =>
  state.products.products.currentPage;
export const productsPerPageSelector = (state) =>
  state.products.products.productsPerPage;

export const currentProductsSelector = createSelector(
  productsSelector,
  currentPageSelector,
  productsPerPageSelector,
  (products, currentPage, productsPerPage) => {
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    return products?.slice(firstProductIndex, lastProductIndex);
  }
);
//auth
export const messageRegisterSelector = (state) => state.auth.register.message;
