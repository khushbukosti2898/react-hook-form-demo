import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Input, Button, Col, Row } from "reactstrap";

const DynamicInput = () => {
  const { register, control } = useForm({
    defaultValues: {
      test: [{ input1: 'Input1', input2: 'Inpiut2' }]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });

  return (
    <form className="text-center card p-3 border-0 shadow-lg">
      <h3>Field array </h3>
      <p>The following demo allow you add and delete input fields</p>
      {fields.map((item, index) => {
        return (
          <Row className="mb-2">
            <Col md="5">
              <Input
                key={item.id}
                defaultValue={`${item.input1}`} // make sure to set up defaultValue
                {...register(`test.${index}.input1`)}
              />
            </Col>
            <Col md="5">
              <Controller
                render={({ field }) => <Input {...field} />}
                name={`test.${index}.input2`}
                control={control}
                defaultValue={item.input2} // make sure to set up defaultValue
              />
            </Col>
            <Col md="2">
              <Button onClick={() => remove(index)}>
                Delete
              </Button>
            </Col>
          </Row>
        );
      })}
      <section>
        <Button
          onClick={() => {
            append({ input1: `Input1 ${fields.length + 1}`, input2: `Input2 ${fields.length + 1}` });
          }}
        >
          Append
        </Button>
      </section>
    </form>
  );
}

export default DynamicInput;