import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { FormDataContext } from "../App";
import {
  Input,
  Label,
  FormGroup,
  FormText,
  FormFeedback,
  Row,
  Col,
  Form,
  Button,
} from "reactstrap";
const FormComponent = ({ handleform }) => {
  const value = useContext(FormDataContext);

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    console.log("errors", errors);
    console.log("formState", formState);
  }, [errors, formState]);

  const renderFields = (fields) => {
    return fields.map((field) => {
      let { type, title, name, required, validation, options } = field;

      switch (type) {
        case "text":
          return (
            <FormGroup key={name}>
              <Label htmlFor={name}>
                {title}
                <span style={required.value ? { color: "red" } : {}}>*</span>
              </Label>
              <input
                type="text"
                {...register(name, {
                  required: required,
                  validate: validation,
                })}
              />
              {errors && errors[name] && <p>{errors[name].message}</p>}
            </FormGroup>
          );

        case "select":
          return (
            <FormGroup key={name}>
              <Label htmlFor={name}>{title}</Label>
              <select {...register("Title", { required: true })}>
                {options.map((option) => (
                  <option value={option.key}>{option.value}</option>
                ))}
              </select>
              {errors && errors[name] && <p>{errors[name].message}</p>}
            </FormGroup>
          );
        case "radio":
          return (
            <FormGroup key={name}>
              <Label htmlFor={name}>{title}</Label>
              <input
                {...register(name, { required: true })}
                type="radio"
                value="Yes"
              />
              {errors && errors[name] && <p>{errors[name].message}</p>}
            </FormGroup>
          );
        default:
          return (
            <div>
              <span>Invalid Field</span>
            </div>
          );
      }
    });
  };

  let { title, Fields } = value;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h4>{title}</h4>
      {renderFields(Fields)}
      <input type="submit" />
    </Form>
  );
};

export default FormComponent;
