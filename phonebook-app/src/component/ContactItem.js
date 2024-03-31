import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col lg={2}>
        <img
          width={50}
          src="https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_1280.png"
          alt=""
        ></img>
      </Col>
      <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.phoneNum}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
