import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Products from "../products/Products";

const Home = () => {
  const navigate = useNavigate();
  const { error } = useSelector((store) => store.userReducer);

  useEffect(() => {
    if (error) {
      navigate("/login");
    }
  }, [error, navigate]);
  return (
    <>
      <Products />
    </>
  );
};

export default Home;
