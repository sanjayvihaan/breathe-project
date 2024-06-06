import React from 'react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const InputField = ({ label, type, name, id, value, placeholder, onChange }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

  return (
    <div className="py-3 relative">
      <span className="mb-2 text-md">{label}</span>
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        name={name}
        id={id}
        className="w-full p-2 mt-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {type === 'password' && (
        <span
          className="absolute right-2 top-[60px] transform-translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </span>
      )}
    </div>
  );
};

export default InputField;
