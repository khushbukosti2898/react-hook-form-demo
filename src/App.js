import React from "react";
import { Col, Row } from "reactstrap";
import AppByCommonInput from "./components/AppByCommonInput";
import AppBySimpleInput from "./components/AppBysimpleInput";
import "./App.css"

const App = () => {
  return (
    <div className="mt-5">
      <h3 className="text-center">React hook form demo</h3>
      <Row>
        <Col md="6"><AppByCommonInput /></Col>
        <Col md="6"><AppBySimpleInput /></Col>
      </Row>
    </div>);
}
export default App;

