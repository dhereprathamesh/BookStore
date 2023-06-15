import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bookdata } from "../Constant/Bookdata";
import "./Main.css";
import { API_URL } from "../API";
import Bookslist from "../BookList/Bookslist";
const Main = () => {
  // let Bookdata;
  // const[books, setBooks] = useState([]);
  // useEffect(()=>{
  //     axios.get(API_URL).then((res)=>{
  //         console.log(res.data)
  //         Bookdata = res.data;
  //        setBooks(res.data)
  //     })
  //     .catch((err)=> err)
  // }, [])

  return (
    <>
      <div className="main-div">
        <img
          className="img-div"
          src="https://cushing-malloy.com/wp-content/uploads/2019/09/17-Ways-To-Find-Good-Books-To-Read.jpg"
          alt=""
        />

        <div className="rows">
          <div className="row1">
            <h1 className="book-quote">
              A room without books is like
              <br /> a body without a soul.
            </h1>
          </div>
          <div className="row2">
            <h2 className="book-quote">Find Your Book</h2>
            <div className="search">
              <form class="example" action="action_page.php">
                <input
                  type="text"
                  placeholder="Search.."
                  name="search"
                  className="input-feild"
                />
                <button type="submit" className="searh-btn">
                  search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="books-set">
        <h3 style={{ marginLeft: "4rem", fontSize: "25px", fontWeight: "650" }}>
          Books
        </h3>

        <Bookslist Bookdata={Bookdata} />
      </div>
    </>
  );
};

export default Main;
