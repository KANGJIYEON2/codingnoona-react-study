import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ConteactForm from "./component/ConteactForm";
import ContactList from "./component/ContactList";

//1. 왼쪽에는 연락처 등록하는 폼, 오른쪽에는 연락처 리스트와 search 창이 있다
//2. 리스트에 유저이름과 전화번호를 추가할 수 있다
//3. 리스트에 아이템이 몇개 있는지 보인다.
//4. 사용자가 유저를 이름검색으로 찾을 수 있다.

function App() {
  return (
    <div>
      <h1 className="title">연락처</h1>
      <Container className="contact_form">
        <Row>
          <Col>
            <ConteactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
