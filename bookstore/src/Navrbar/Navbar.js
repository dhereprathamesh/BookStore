import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { add_to_cart_action, remove_from_cart_action } from '../Store/Cart/cart.action';

const Navbar = ({count}) => {
    // const useName = JSON.parse(localStorage.getItem("user"))
    // const [open, setOpen] = useState(false);
    // const navigate = useNavigate();
  
    //   const handleLogout= ()=>{
    //     localStorage.removeItem("loggedin")
    //     navigate("/login");
    //   }
    // const handleClick = () => {
    //   setOpen((prev) => !prev);
    // };
  
    // const handleClickAway = () => {
    //   setOpen(false);
    // };
    return (
      <div>
        <header className="header">
          <nav className="nav">
            <div className="logo">
            <NavLink to="/" style={{textDecoration:"none",color:"white"}}>
              <span className="nav-title">BookStore</span>
              </NavLink>
              {/* <a href="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtZgGANYLx0kNK-Tce5lCtDudgv68L9-I9g&usqp=CAU"
                alt="Amazon Logo"
                className="nav-logo"
              />
            </a> */}
            </div>
          
           
            <div className="account">
              <Link to="/mycart" className="link">
              {/* <span><i  className="fa-light fa-cart-shopping" style={{color: "#dfc730",}} /></span> */}
              <div  className="btn-section">
               <h5 className='cart_div me-3 me-1 mt-1 '><span className='cart_n0'>{count}</span>cart</h5>
              </div>
              </Link>
            </div>
          </nav>
        </header>
      </div>
    );
  }
  const mapStateToProps = (state) => {
    return {
      count: state.cartReducer.total,
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
  export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
