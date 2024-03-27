import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
}

const Textarea: React.FC<TextareaProps> = ({ id, ...rest }) => {
  return (
    <textarea
      id={id}
      {...rest}
      className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
    />
  );
};

export default Textarea;
