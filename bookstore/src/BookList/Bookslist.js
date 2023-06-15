import React from 'react'
import Card from '../common/Card/Card'
import './Booklist.css'
import { Link } from 'react-router-dom'
import { Bookdata } from '../Constant/Bookdata'

const Bookslist = (Bookdata) => {
    console.log(Bookdata, "Booklistcomponent")
  return (
    <>
    <div className="Book__List">
    {/* <Link to={ `/book/:${Bookdata.id}`}  style={
        {marginLeft: "1rem", display: "grid", width: "10rem", gridTemplateColumns: "auto auto auto auto auto", columnGap: "5rem", rowGap: "3rem" }



}> */}
    <Card booklist ={Bookdata}/>
   
    </div>
      
    </>
  )
}

export default Bookslist
