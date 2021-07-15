import React from "react";
import { Card, CardBody, CardTitle, Col, Form, Row, Button } from "reactstrap";
import { useFieldArray, useForm } from "react-hook-form";
import CustomInput from "../components/common-component/CustomInput";
import { emailRule, alphabetRule } from "../utils";
import ReactSelect from "../components/common-component/ReactSelect";
import TextArea from "./common-component/TextArea";

const AppByCommonInput = () => {
  // set default values
  const defaultValues = {
    email: '',
    password: '',
    role: null,
    description: '',
    rememberMe: false,
    fullName: [{ firstName: '', lastName: '' }]
  };
  const { control, handleSubmit, watch, formState: { errors }, reset } = useForm({ defaultValues });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fullName"
  });

  const onSubmit = data => {
    console.log('data', data);
    alert("Submited form Data ---> " + JSON.stringify(data));
  };

  console.log('watch()', watch()); // watch input value by passing the name of it like watch("email")
  console.log('errors', errors); // error object

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="mt-2">
      <Row className="justify-content-center align-items-center">
        <Col sm="12" md={9}>
          <Card className="shadow-lg border-0 p-3">
            <CardBody>
              <CardTitle tag="h5" className="text-center mb-4">
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
                <ReactSelect
                  placeholder="Select Role"
                  name="role"
                  options={[{ Value: 'admin', label: 'Admin' }, { value: 'user', label: 'User' }]}
                  control={control}
                  label="Role"
                  isRequired
                  rules={{ required: 'Role is required' }}
                  error={errors.role}
                />
                <TextArea
                  label="Description"
                  placeholder="Description"
                  name="description"
                  control={control}
                  isRequired
                  rules={{ required: 'Description is required' }}
                  error={errors.description}
                  rows={4}
                />

                <label className="mt-2">Dynamic inputs</label>
                {fields.map((item, index) => {
                  return (
                    <Row className="mb-2" key={item.id}>
                      <Col md="4">
                        <CustomInput
                          type="text"
                          label=""
                          name={`fullName.${index}.firstName`}
                          placeholder="First name"
                          isRequired
                          control={control}
                          rules={{
                            required: 'First name is required',
                            pattern: alphabetRule(),
                          }}
                          error={
                            errors.fullName &&
                            errors.fullName[index] &&
                            errors.fullName[index].firstName
                          }
                        />
                      </Col>
                      <Col md="4">
                        <CustomInput
                          type="text"
                          label=""
                          name={`fullName.${index}.lastName`}
                          placeholder="Last name"
                          isRequired
                          control={control}
                          rules={{
                            required: 'Last name is required',
                            pattern: alphabetRule(),
                          }}
                          error={
                            errors.fullName &&
                            errors.fullName[index] &&
                            errors.fullName[index].lastName
                          }
                        />
                      </Col>
                      <Col md="4" className="d-flex align-self-center mt-1">
                        {fields.length !== 1 && (<Button color="danger" onClick={() => remove(index)}>
                          ❌
                        </Button>)}
                        {fields.length - 1 === index && <Button
                          onClick={() => { append({ firstName: ``, lastName: `` }) }}
                          className="mx-2"
                        >
                          +
                        </Button>}
                      </Col>
                    </Row>
                  );
                })}

                <div className="mt-4">
                  <Button color="primary">Login</Button>
                  <Button onClick={() => reset(defaultValues)} color="secondary mx-2">Reset</Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>);
}
export default AppByCommonInput;

