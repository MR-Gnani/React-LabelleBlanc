import React from 'react'
import ProductDetails from '../page/ProductDetails';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({authenticate}) => {
  return authenticate === true? <ProductDetails/> : <Navigate to="/login"/>
};

export default PrivateRoute
