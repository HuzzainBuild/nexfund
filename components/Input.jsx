import React from "react";

const Input = ({ type, title, name, place, value, handleChange }) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-gray-300 font-medium">{title}</label>
      <input
        type={type}
        name={name}
        placeholder={place}
        onChange={handleChange}
        value={value}
        className="w-full py-2 px-2 border border-gray-300 rounded-md focus:bg-black transition-all duration-700 outline-0"
      />
    </div>
  );
};

export default Input;
