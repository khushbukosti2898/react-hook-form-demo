import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { Controller } from 'react-hook-form';

const TextArea = ({
  name,
  placeholder,
  className,
  label,
  isRequired,
  error,
  disabled,
  labelClassName,
  rows,
  control,
  rules,
}) => (
  <FormGroup className="mt-2">
    {label && (
      <Label className={labelClassName} for={name}>
        {label}
        {isRequired && <span style={{ color: 'red' }}> * </span>}
      </Label>
    )}

    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <Input
          id={name}
          type="textarea"
          name={name}
          className={className}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          {...field}
        />
      )}
    />
    {error && <p className="text-danger">{error.message}</p>}
  </FormGroup>
);

export default TextArea;
