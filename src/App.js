import React from "react";
import { Col, Row } from "reactstrap";
import AppByCommonInput from "./components/AppByCommonInput";
import AppBySimpleInput from "./components/AppBysimpleInput";
import "./App.css"
import DynamicInput from "./components/common-component/DynamicInput";

const App = () => {
  return (
    <div className="mt-5">
      <h3 className="text-center">React hook form demo</h3>
      <Row>
        <Col md="6"><AppBySimpleInput />
        </Col>
        <Col md="6"><AppByCommonInput />
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md="6">
          <DynamicInput />
        </Col>
      </Row>
    </div>);
}
export default App;

