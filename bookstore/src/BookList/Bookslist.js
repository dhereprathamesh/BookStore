import React from 'react'
import Card from '../common/Card/Card'
import './Booklist.css'
import { Link } from 'react-router-dom'

const Bookslist = (Bookdata) => {
    console.log(Bookdata)
  return (
    <>
    <div className="Book__List">
    <Link to="/book" style={
        {marginLeft: "1rem", display: "grid", width: "10rem", gridTemplateColumns: "auto auto auto auto auto", columnGap: "5rem", rowGap: "3rem" }



}>
    <Card booklist ={Bookdata}/>
   </Link>
    </div>
      
    </>
  )
}

export default Bookslist
