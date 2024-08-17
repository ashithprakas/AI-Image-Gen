import React from "react";
import "./TextInput.scss";

interface TextInputProp {
  label: string;
  placeholder: string;
  name: string;
  rows: number;
}
const TextInput: React.FC<TextInputProp> = ({
  label,
  placeholder,
  name,
  rows = 1,
}) => {
  return (
    <div className="text-input">
      <label className="text-label">{label}</label>
      <div className="text-input-container">
        <textarea
          className="text-input"
          placeholder={placeholder}
          rows={rows}
          name={name}
        />
      </div>
    </div>
  );
};

export default TextInput;
