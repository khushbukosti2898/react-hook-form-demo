import React from 'react';
import {
  Input,
  Label,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
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
  labelClassName,
  control,
  rules,
  prepend,
  append,
  defaultValue,
}) => (
  <div className="mt-2">
    {label && (
      <Label className={labelClassName} for={name}>
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
          <>
            {prepend && (
              <InputGroupAddon addonType="prepend">
                <InputGroupText>{prepend}</InputGroupText>
              </InputGroupAddon>
            )}
            <Input
              id={name}
              type={type}
              name={name}
              className={className}
              placeholder={placeholder}
              disabled={disabled}
              {...field}
            />
            {append && (
              <InputGroupAddon addonType="append">
                <InputGroupText>{append}</InputGroupText>
              </InputGroupAddon>
            )}
          </>
        )}
      />
    </InputGroup>
    {error && error.message && <p className="form-error text-danger">{error.message}</p>}
  </div>
);

export default CustomInput;