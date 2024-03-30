import React, { useEffect, useState } from "react";
import { Col, Collapse, Container, Row } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log(searchQuery);
    let url = `https://my-json-server.typicode.com/KANGJIYEON2/database/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    setProductList(data);
    console.log(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div className="product-all-list">
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} md={12}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
