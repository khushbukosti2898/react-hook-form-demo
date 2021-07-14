import React from "react";
import { Card, CardBody, CardTitle, Col, Form, Row, Button, Container } from "reactstrap";
import { useForm } from "react-hook-form";
import CustomInput from "../components/common-component/CustomInput";
import emailRule from "../utils";
import CheckBox from "../components/common-component/CheckBox";

const AppByCommonInput = () => {
  // set default values
  const defaultValues = {
    email: '',
    password: '',
    rememberMe: false,
  };
  const { control, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues });

  const onSubmit = data => {
    console.log('data', data);
    alert("Submited form Data ---> " + JSON.stringify(data));
  };

  console.log(watch()); // watch input value by passing the name of it like watch("email")
  console.log(errors); // error object

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="mt-5">
      <Row className="justify-content-center align-items-center">
        <Col sm="12" md={7}>
          <Card className="shadow-lg border-0 p-3">
            <CardBody>
              <CardTitle tag="h4" className="text-center mb-4">
                With controller
              </CardTitle>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <CustomInput
                  label="Email"
                  type="text"
                  name="email"
                  placeholder="Email"
                  isRequired
                  control={control}
                  rules={{ required: 'Email is required', pattern: emailRule() }} // by pattern specify the regex
                  error={errors.email}
                />
                <CustomInput
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Password"
                  isRequired
                  control={control}
                  rules={{
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Password is too short' },
                  }}
                  error={errors.password}
                />
                <CheckBox
                  control={control}
                  name="rememberMe"
                  label="Remember me"
                />
                <Button color="primary mt-2">Login</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>);
}
export default AppByCommonInput;

