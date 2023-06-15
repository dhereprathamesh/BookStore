import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
const Card = (booklist) => {
    console.log("abc",booklist)
  return (
    <>
    {
        booklist.booklist.Bookdata.map((books, index) => {
            console.log(books,"cardData")
            return(
                <>
                
                 
                <div className="cards">
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
               
           
            </>
            );
        })
    }
   
    </>
  )
}

export default Card
