import React, { FC } from 'react';

interface InputProps {
   type: string;
   name: string;
   placeholder: string;
}

const Input: FC<InputProps> = ({ type, name, placeholder }) => {
   return (
      <input data-testid="input" type={type} name={name} placeholder={placeholder} />
   )
};

export default Input;