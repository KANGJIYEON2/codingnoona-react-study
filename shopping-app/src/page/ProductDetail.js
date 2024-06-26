import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { productAction } from "../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsDetail } from "../redux/reducers/productSlice";
const ProductDetail = () => {
  let { id } = useParams();
  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();
  const getProductDetail = async () => {
    dispatch(fetchProductsDetail(id));
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="product-detail">
      <Row className="product-img">
        <Col>
          <img className="product-img-detail" src={product?.img} alt="" />
        </Col>
        <Col>
          <div>
            <h3>{product?.title}</h3>
          </div>
          <div>{product?.price}원</div>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label={`${product?.color[0]}`}
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label={`${product?.color[1]}`}
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
          <FontAwesomeIcon icon={faShoppingCart} className="shoping-cart" />
        </Col>
        <Row>
          <div className="d-grid gap-2">
            <Button variant="secondary" size="lg">
              구매하기
            </Button>
          </div>
        </Row>
      </Row>
    </Container>
  );
};

export default ProductDetail;
