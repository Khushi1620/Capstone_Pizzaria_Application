import "./index.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/slices/authSlice";
import { getUser } from "./services/localStorage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import CustomizePizza from "./pages/CustomizePizza/CustomizePizza";
import Success from "./pages/Success/Success";
import Feedback from "./pages/Feedback/Feedback";
import NotFound from "./pages/NotFound/NotFound";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    const user = getUser();

    if (user) {

      dispatch(login(user));

    }

  }, [dispatch]);

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/menu" element={<Menu />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customize/:id"
          element={
            <ProtectedRoute>
              <CustomizePizza />
            </ProtectedRoute>
          }
        />

        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          }
        />

        <Route
          path="/feedback"
          element={
            <ProtectedRoute>
              <Feedback />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;