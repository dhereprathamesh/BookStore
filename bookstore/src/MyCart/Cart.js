import React from "react";
import "./Cart.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import {
  add_to_cart_action,
  remove_from_cart_action,
} from "../Store/Cart/cart.action";
import { Link } from "react-router-dom";

const Cart = (cart) => {
  const dispatch = useDispatch();
  console.log(cart, "myCArt");
  return (
    <>
    <div className="car_div">
                <h1>My Cart</h1>
              </div>
      {cart.cart.map((items) => {
        return (
          <>
            <div className="">
              
              <div className="cart_description mt-5">
                <img src={items ? items.image_url : " "} alt="" className="cart_img_div" />
                <h5 className="mt-4">{items ? items.title : " "}</h5>
                
                <h5 className="mt-4">{items ? items.price : " "}₹</h5>
                <span
                  className="remove_btn mb-1 " 
                  type=""
                  onClick={() => {
                    dispatch(remove_from_cart_action(items));
                  }}
                >x
                  
                </span>
               
              </div>
            </div>
          </>
        );
      })}
       <div className="container">
                <div className="row">
                    <Link to="/checkout" className="btn btn-outline-primary mb-5 mx-auto w-25 ">Proceed To checkout</Link>
                </div>
            </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cartItems,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      add_to_cart: add_to_cart_action,
      remove_from_cart: remove_from_cart_action,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
