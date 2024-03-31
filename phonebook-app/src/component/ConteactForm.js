import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

const ConteactForm = () => {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState(0);
  const dispatch = useDispatch();
  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNum },
    });
  };

  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type="number"
          placeholder="전화번호를 입력해주세요"
          onChange={(event) => setPhoneNum(event.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        추가하기
      </Button>
    </Form>
  );
};

export default ConteactForm;
