import React from "react";
import { useForm } from "react-hook-form";
import { Card, CardBody, CardTitle, Col, Form, Row, Button, Input } from "reactstrap";

function AppBySimpleInput() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  // your form submit function which will invoke after successful validation
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log(watch()); // watch input value by passing the name of it like watch("email")
  console.log(errors); // error object

  return (
    <div className="mt-5">
      <Row className="justify-content-center align-items-center">
        <Col sm="12" md={7}>
          <Card className="shadow-lg border-0 p-3">
            <CardBody>
              <CardTitle tag="h4" className="text-center mb-4">
                Without controller
              </CardTitle>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-2">
                  <label>Email</label>
                  <Input
                    placeholder="Enter email"
                    {...register("email", {
                      required: true,
                      pattern: /^([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)$/
                    })}
                  />
                  {errors?.email?.type === "required" && <p className="text-danger">Email is required</p>}
                  {errors?.email?.type === "pattern" && (
                    <p className="text-danger">Invalid email</p>
                  )}
                </div>

                <div className="mt-2">
                  <label>Password</label>
                  <Input
                    type="password"
                    placeholder="Enter password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                    })}
                  />
                  {errors?.password?.type === "required" && <p className="text-danger">Password is required</p>}
                  {errors?.password?.type === "minLength" && (
                    <p className="text-danger">Password is too short</p>
                  )}
                </div>

                <div className="mt-2">
                  <label>
                    <Input
                      type="checkbox"
                      {...register('rememberMe')}
                      name="rememberMe"
                      label="Remember me"
                    />
                    Remember me
                  </label>
                </div>
                <Button color="primary mt-2">Login</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>);
}

export default AppBySimpleInput;


