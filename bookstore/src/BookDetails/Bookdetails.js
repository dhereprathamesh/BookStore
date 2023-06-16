import React from 'react'
import { Bookdata } from '../Constant/Bookdata'
import { useParams } from 'react-router-dom'
import './Bookdetails.css'
import { add_to_cart_action, add_to_cart_saga, remove_from_cart_action, remove_from_cart_saga } from '../Store/Cart/cart.action'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";



const Bookdetails = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const bookDetail = Bookdata.find( book => book.id === parseInt(id));
  console.log(props, "this props")
  return (

    <div className="bookdetail__page">
      <div className="book__boxes">
        <div className='img__div'>
          <img src={bookDetail.image_url} alt=""/>
        </div>
        <div className='bookdetail__div'>
          <h2>{bookDetail.title} </h2> 
          <h3>{bookDetail.authors} </h3> 
          <p>{bookDetail.description}</p>
          <h5>{bookDetail.price}₹</h5>
          <button type="" className='add_to_cart_btn' onClick={() => {dispatch(add_to_cart_action(bookDetail))}}>Add TO Cart</button>
        </div>
        <div className='book__genres'>
          <h2>Book Details</h2>
          <p>Genres: {bookDetail.genres}</p>
          <p>paperBack: {bookDetail.num_pages}pages</p>
          <p>{}</p>
        </div>
      </div>
     
      <div className='book__quotes'>
          <h2>Book Quotes</h2>
          <p>1: {bookDetail.Quote1}</p>
          <p>2: {bookDetail.Quote2}</p>
          <p>3: {bookDetail.Quote3}</p>
        </div>
    </div>
  )
}

export default Bookdetails;
