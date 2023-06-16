import "./App.css";
import Bookdetails from "./BookDetails/Bookdetails";
import Main from "./Main/Main";
import Cart from "./MyCart/Cart";
import Navbar from "./Navrbar/Navbar";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";
import Checkout from "./Checkout/Checkout";
function App() {
  return (
    <>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book/:id" element={<Bookdetails />} />
        <Route path="/mycart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </Provider>
    </>
  );
}

export default App;
