import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
const Checkout = () => {
    const state = useSelector((state) => state.CartReducer)
    console.log(state,"fgsfdgsd")
    var total = 0;
    
    const itemList = (item) => {
        total = total + item.price;
    }
    console.log(itemList)
        
  return (
    <div className="container">
      <div className="container mt-5 px-5">
        <div className="mb-4">
          <h2>Confirm order and pay</h2>
          <span>
            please make the payment, after that you can enjoy all the features
            and benefits.
          </span>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="card p-3">
              <h6 className="text-uppercase">Payment details</h6>
              <div className="inputbox mt-3">
                {" "}
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required="required"
                />{" "}
                <span>Name on card</span>{" "}
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    {" "}
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                    />{" "}
                    <i className="fa fa-credit-card"></i>{" "}
                    <span>Card Number</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex flex-row">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>Expiry</span>{" "}
                    </div>

                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>CVV</span>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-4">
                <h6 className="text-uppercase">Billing Address</h6>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>Street Address</span>{" "}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>City</span>{" "}
                    </div>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>State/Province</span>{" "}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>Zip code</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 mb-4 d-flex justify-content-between">
              <span>Previous step</span>

              <button className="btn btn-success px-3" onClick={()=> {alert("Your Payment has been Successfully Completed")}}>Pay 55₹</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-blue p-3 text-white mb-3">
              <span className="pay_div">You have to pay</span>
              <div className="d-flex flex-row align-items-end mb-3">

                <h1 className="mb-0 yellow">55₹</h1> <span>.99</span>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
