import React from 'react';

interface SelectProps {
  id: string;
  required?: boolean;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ id, required, children }) => {
  return (
    <select
      id={id}
      required={required}
      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
    >
      {children}
    </select>
  );
};

export default Select;
