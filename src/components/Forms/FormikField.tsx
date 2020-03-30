import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

import FormControlInput from "./FormControlInput";


const Components = {
  default: FormControlInput
};

const FormField = ({
  setFieldValue,
  setFieldTouched,
  formControl,
  error,
  touched,

  value,
}) => {
  const {
    name,
    type,
    placeholder,
    label
  } = formControl;

  const fieldError = touched && !!error;
  const helperText = fieldError? error : "";
  const Component = Components.default;

  const change = (name:string, value) => {
    setFieldValue(name, value);
    setFieldTouched(name, true, true);
  };

  const blur = (name:string, value) => {
    if (value) setFieldValue(name, value);
    setFieldTouched(name, true, true);
  };




  return (
    <Field
      name={name}
      controlType={type}
      value={value}
      helperText={helperText && helperText}
      label={label}
      error={fieldError}
      component={Component}
      placeholder={placeholder}

      onChange={change.bind(null, name)}
      onBlur={ blur.bind(null, name)}
    />
  );
};

FormField.propTypes = {
  disabled: PropTypes.bool,
  formControl: PropTypes.object,
  error: PropTypes.string,
  touched: PropTypes.bool,
  value: PropTypes.string,
  formValues: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default FormField;
