import React, { FC } from 'react';

interface IButtonProps {
   type: "button" | "submit" | "reset" | undefined;
   text: string;
}

const Button: FC<IButtonProps> = ({ type, text }) => {
   return <button type={type}>{text}</button>
}

export default Button;