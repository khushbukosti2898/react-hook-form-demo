import React from "react";
import { useForm } from "react-hook-form";
import { Card, CardBody, CardTitle, Col, Form, Row, Button, Input } from "reactstrap";

const AppBySimpleInput = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // your form submit function which will invoke after successful validation
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log('watch()', watch()); // watch input value by passing the name of it like watch("email")
  console.log('errors', errors); // error object

  return (
    <div className="mt-2">
      <Row className="justify-content-center align-items-center">
        <Col sm="12" md={9}>
          <Card className="shadow-lg border-0 p-3">
            <CardBody>
              <CardTitle tag="h5" className="text-center mb-4">
                Without controller
              </CardTitle>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-2">
                  <label>Email <span className="text-danger">*</span></label>
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
                  <label>Password <span className="text-danger">*</span></label>
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

                <Button color="primary mt-4">Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>);
}

export default AppBySimpleInput;


