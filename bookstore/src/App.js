
import './App.css';
import Bookdetails from './BookDetails/Bookdetails';
import Main from './Main/Main';
import Navbar from './Navrbar/Navbar';
import { BrowserRouter, Routes, Route, Router, } from "react-router-dom";

function App() {
  return (
    <div className="">
      {/* <Navbar/>
      <Main/> */}
      
      <Navbar/>
      
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/book" element={< Bookdetails/>}/>

      </Routes>
    
    </div>
  );
}


export default App;
