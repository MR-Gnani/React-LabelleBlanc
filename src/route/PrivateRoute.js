import React from 'react'
import ProductDetails from '../page/ProductDetails';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const authenticate = useSelector((state)=>state.auth.authenticate);
  return authenticate === true? <ProductDetails/> : <Navigate to="/login"/>
};

export default PrivateRoute
