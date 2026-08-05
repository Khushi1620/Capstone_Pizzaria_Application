import "./Navbar.css";

import {useSelector, useDispatch} from "react-redux";
// Link is use so that we can navigate to different pages without reloading the page.
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../../redux/slices/authSlice";

// cart = 0 after logg out
import { clearCart } from "../../redux/slices/cartSlice";
import { removeUser } from "../../services/localStorage";

// dispatch()   → WRITE into Redux
// useSelector() → READ from Redux

function Navbar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // handle logout function
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    removeUser();
    navigate("/");
  }
  // Take a redux store and return only auth part(state=>state.auth)
  const {isLoggedIn, user} = useSelector((state) => state.auth);
  const {cartItems} = useSelector((state)=> state.cart);
  console.log("Total items are " , cartItems);

  // function to add total cart items 
  const totalCartItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <nav className="navbar">
      <div className="logo">
        {/* pizzeria is a visible text in navbar when we create it  */}
        <Link to="/">Pizzeria</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/menu">Order Pizza</Link>
        </li>

        <li>
          <Link to="/cart">Cart ({totalCartItems})</Link>
        </li>

  {/* Login and register function if user logged in then register will become logout */}
        {
  isLoggedIn ? (
    <>
      <li>Hi, {user.name} 👋</li>
      <li>
        <button onClick={handleLogout}>
          Logout
        </button>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link to="/login">Login</Link>
      </li>

      <li>
        <Link to="/register">Register</Link>
      </li>
    </>
  )
}
      </ul>
    </nav>
  );
}

export default Navbar;