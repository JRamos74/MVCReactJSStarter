import * as React from "react";

const onChangeInput = props => e => {
  props.onChange(e.target.name, e.target.value);
};

const formatWrapperClass = props => {
  const wrapperClass = "form-group";
  return props.error ? `${wrapperClass} has-danger` : wrapperClass;
};

export const Input = props => (
  <div className={formatWrapperClass(props)}>
    <label htmlFor={props.name}>{props.label}</label>
    <div className="field">
      <input
        type={props.type}
        required={props.required}
        name={props.name}
        className={
          props.className ? props.className + " form-control" : "form-control"
        }
        placeholder={props.placeholder}
        value={props.value}
        onChange={onChangeInput(props)}
      />
    </div>
    <div className="text-muted">{props.error}</div>
  </div>
);
