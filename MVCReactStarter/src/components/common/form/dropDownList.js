import * as React from "react";

const formatWrapperClass = props => {
  const wrapperClass = "form-group";
  return props.error ? `${wrapperClass} has-error` : wrapperClass;
};

const onChangeInput = props => e => {
  props.onChange(e.target.id, e.target.value);
};

export const DropDownList = props => {
  var options = props.options.map(option => {
    return (
      <option key={option.valu} value={option.value}>
        {option.text}
      </option>
    );
  });

  return (
    <div className={formatWrapperClass(props)}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field">
        <select
          value={props.selectedValue}
          onChange={onChangeInput(props)}
          id={props.name}
          className={
            props.className ? props.className + "form-control" : "form-control"
          }
          disabled={props.disabled}
        >
          {options}
        </select>
      </div>
      <div className="help-block">{props.error}</div>
    </div>
  );
};
