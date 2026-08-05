{/* <ProtectedRoute>
    <Checkout />
</ProtectedRoute>
  will convert into 
  <ProtectedRoute children={<Checkout />} />
  automatically */}

  import { useSelector } from "react-redux";
  import { Navigate } from "react-router-dom";

  function ProtectedRoute({ children }) {

    const {isLoggedIn} = useSelector((state)=> state.auth);
    // check is user logged in or not
    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }
    // if user logged in 
    return children
  }

  export default ProtectedRoute;