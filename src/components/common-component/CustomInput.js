import React from 'react';
import {
  Input,
  Label,
  InputGroup,
} from 'reactstrap';
import { Controller } from 'react-hook-form';

const CustomInput = ({
  type,
  name,
  placeholder,
  className,
  label,
  isRequired,
  error,
  disabled,
  control,
  rules,
  defaultValue,
}) => (
  <div className="mt-2">
    {label && (
      <Label for={name}>
        {label}
        {isRequired && <span style={{ color: 'red' }}> * </span>}
      </Label>
    )}
    <InputGroup>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Input
            id={name}
            type={type}
            name={name}
            className={className}
            placeholder={placeholder}
            disabled={disabled}
            {...field}
          />
        )}
      />
    </InputGroup>
    {error && error.message && <p className="form-error text-danger">{error.message}</p>}
  </div>
);

export default CustomInput;