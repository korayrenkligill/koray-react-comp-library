import React from "react";

interface Props {
  label: string;
}

const Button = (props: Props) => {
  return <div>{props.label}</div>;
};

export default Button;
