import React from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { render, screen } from "@testing-library/react";
import LiveRanges from "./LiveRanges";
import {
  useGetGoldenQuery,
  useGetSilverQuery,
} from "../../../services/metalsApi";

jest.mock("../../../services/metalsApi");

// jest.mock("../../../services/metalsApi", () => {
//   return {
//     useGetGoldenQuery: jest.fn().mockImplementation(() => {
//       return {
//         data: [{ unit: "ounce", price: "1,845.00", change: "-13.50" }],
//         isFetching : false,
//       };
//     }),
//     useGetSilverQuery: jest.fn().mockImplementation(() => {
//       return {
//         data: [{ unit: "ounce", price: "45.00", change: "-3.50" }],
//         isFetching: false,
//       };
//     }),
//   };
// });

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <LiveRanges />
    </Provider>
  );
  const linkElement = screen.getByText(/app/i);
  expect(linkElement).toBeInTheDocument();
});
