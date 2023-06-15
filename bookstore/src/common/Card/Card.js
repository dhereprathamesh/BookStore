import React from 'react'
import { Link } from 'react-router-dom'

import './Card.css'
const Card = (booklist) => {
    console.log("abc",booklist)
  return (
    <>
    {
        booklist.booklist.Bookdata.map((books, index) => {

            return(
                <>
                <Link to={ `/book/${books.id}`}  style={
        {marginLeft: "1rem", display: "grid", width: "10rem", gridTemplateColumns: "auto auto auto auto auto", columnGap: "5rem", rowGap: "3rem" }



}>
                 
                <div className="cards" key={books.id}>
                <img className="cards__img" src={books.image_url} />
                <div className="cards__overlay">
                    <div className="card__title"> {books.title}</div>
                    <div className="card__runtime">
                        <span>{books ? books.Quote1 : " "}</span>
                        <span className="card__rating"><i className="fas fa-star" />{books.rating}</span>
                    </div>
                    <div className="card__description">{books ? books.price : " "}₹</div>
                    <button type="" className="card__btn">+</button>
                </div>
            </div>
            </Link>
               
           
            </>
            );
        })
    }
   
    </>
  )
}

export default Card
