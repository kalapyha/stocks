import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Exchanges from "../Exchanges/Exchanges";
import Metals from "../Metals/Metals";
import News from "../News/News";

function App(): JSX.Element {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/metals" element={<Metals />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
