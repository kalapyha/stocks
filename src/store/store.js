import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { metalsApi } from "../services/metalsApi";

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [metalsApi.reducerPath]: metalsApi.reducer,
  },
});

export default store;
