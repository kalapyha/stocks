import { Button, CssBaseline } from "@mui/material";
import { useGetExchangesQuery } from "../../services/cryptoApi";
import { useGetGoldenQuery } from "../../services/metalsApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Exchanges from "../Exchanges/Exchanges";
import Metals from "../Metals/Metals";
import News from "../News/News";

function App() {
  // const { data: cryptoData, isFetching: cryptoFetching } =
  // // @ts-ignore: Unreachable code error
  //   useGetExchangesQuery();

  // // @ts-ignore: Unreachable code error
  // const { data: goldData, isFetching: goldFetching } = useGetGoldenQuery();

  // console.log("Golden", goldData);
  // console.log(" ---- ");
  // console.log("Crypto", cryptoData?.data);

  return (
    <Router>
        <CssBaseline />
        <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/metals" element={<Metals/>} />
          <Route path="/news" element={<News/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
