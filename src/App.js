import "./App.css";
import Header from "./component/Header/Header";
import Container from "./component/Container/Container";
import Footer from "./component/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Detail from "./component/Detail/Detail";
import CheckOut from "./component/CheckOut/CheckOut";
import Payment from "./component/Payment/Payment";
import Confirmation from "./component/Confirmation/Confirmation";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
