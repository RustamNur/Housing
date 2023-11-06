import React from "react";
import { Container } from "./style";

const Input = ({
  type,
  width,
  height,
  onChange,
  placeholder,
  name,
  value,
  defaultValue,
}) => {
  return (
    <Container
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      width={width}
      height={height}
      type={type}
    />
  );
};

export default Input;
