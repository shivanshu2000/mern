import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Product from "../components/Product.component";
import { Row, Col } from "react-bootstrap";

import Loader from "../components/Loader.component";
import Message from "../components/Message.component";

import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row className="d-flex justify-content-center">
          {products.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
