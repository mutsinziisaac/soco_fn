import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import categoriesSlice from "./slices/categoriesSlice";
import orderSlice from "./slices/orderSlice";
import storefront from "./slices/storefront";
import cartSlice from "./slices/cartSlice";
import usersSlice from "./slices/usersSlice";
import singleOrderSlice from "./slices/singleOrderSlice";
import dashboardDataSlice from "./slices/dashboardSlice";
import chartDataSlice from "./slices/chartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsSlice,
      categories: categoriesSlice,
      orders: orderSlice,
      sfProducts: storefront,
      cart: cartSlice,
      users: usersSlice,
      order: singleOrderSlice,
      dashboardData: dashboardDataSlice,
      chartData: chartDataSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
