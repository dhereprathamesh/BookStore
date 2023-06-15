import "./App.css";
import Bookdetails from "./BookDetails/Bookdetails";
import Main from "./Main/Main";
import Navbar from "./Navrbar/Navbar";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book/:id" element={<Bookdetails />} />
      </Routes>
    </>
  );
}

export default App;
