import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

const ReactSelect = (props) => {
  const {
    control,
    options,
    name,
    rules,
    className,
    isSearchable,
    placeholder,
    isRequired,
    error,
    isClearable,
    label,
    isMulti,
    isDisabled,
    noOptionsMessage,
    defaultValue,
    menuPlacement,
    isLoading,
    loadingMessage,
  } = props;

  return (
    <div className='mt-2'>
      {label && (
        <label htmlFor={name}>
          {label}
          {isRequired && <span style={{ color: 'red' }}> * </span>}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Select
            menuPlacement={menuPlacement}
            classNamePrefix="react_select"
            className={className}
            isSearchable={isSearchable}
            isClearable={isClearable}
            isMulti={isMulti}
            placeholder={placeholder}
            name={name}
            options={options}
            onMenuClose={() => {
              if (
                Array.isArray(field.value) &&
                field.value.length === 0
              ) {
                control.setValue(field.name, null);
              }
            }}
            onBlur={field.onBlur}
            onFocus={field.onFocus}
            value={field.value}
            isDisabled={isDisabled}
            noOptionsMessage={() => noOptionsMessage}
            isLoading={isLoading}
            loadingMessage={() => loadingMessage}
            {...field}
            onChange={(value) => {
              field.onChange(value);
            }}
          />
        )}
      />
      {error && error.message && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default ReactSelect;
