import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const metalsApiHeaders = {
  "x-rapidapi-key": "af169b48a7msh512c6053c50bc93p1f28e8jsn926ffd7099c5",
  "x-rapidapi-host": "live-and-historical-gold-prices.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: metalsApiHeaders });

export const metalsApi = createApi({
  reducerPath: "metalsApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://live-and-historical-gold-prices.p.rapidapi.com/live-price",
  }),
  endpoints: (builder) => ({
    getGolden: builder.query({
      query: () => createRequest("/gold"),
    }),
    getSilver: builder.query({
      query: () => createRequest("/silver"),
    }),
  }),
});

export const { useGetGoldenQuery, useGetSilverQuery } = metalsApi;
