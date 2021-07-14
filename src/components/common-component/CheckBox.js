import React from 'react';
import { CustomInput, Label } from 'reactstrap';
import { Controller } from 'react-hook-form';

const CheckBox = React.forwardRef(({
  name,
  className,
  label,
  isRequired,
  error,
  disabled,
  labelClassName,
  formGroupLable,
  control,
  rules,
  defaultValue,
}, ref) => (
  <div className="mt-2">
    {formGroupLable && (
      <Label className={labelClassName} for={name}>
        {formGroupLable}
        {isRequired && <span style={{ color: 'red' }}> * </span>}
      </Label>
    )}
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => (
        <CustomInput
          type="checkbox"
          id={name}
          label={label}
          name={name}
          className={className}
          disabled={disabled}
          {...field}
          ref={ref}
        />
      )}
    />
    {error && error.message && <p className="form-error">{error.message}</p>}
  </div>
),);
export default CheckBox;
