import { createSelector } from "@reduxjs/toolkit";

//header
export const stateNavSelector = (state) => state.header.navigation;

//products
export const categorySelector = (state) => state.products.category;
export const productsSelector = (state) => state.products.data;
export const searchTextSelector = (state) => state.products.filters.search;
export const currentPageSelector = (state) =>
  state.products.filters.currentPage;
export const productsPerPageSelector = (state) =>
  state.products.filters.productsPerPage;

export const currentProductsSelector = createSelector(
  productsSelector,
  currentPageSelector,
  productsPerPageSelector,
  searchTextSelector,
  (products, currentPage, productsPerPage, searchText) => {
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    if (searchText === "") {
      return products?.slice(firstProductIndex, lastProductIndex);
    } else {
      const listSearchProduct = products?.filter((product) => {
        return product.NameProduct.toLowerCase().includes(
          searchText.toLowerCase()
        );
      });
      return listSearchProduct.slice(firstProductIndex, lastProductIndex);
    }
  }
);

//auth
export const messageRegisterSelector = (state) => state.auth.register.message;
