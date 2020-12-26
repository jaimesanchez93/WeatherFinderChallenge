import React, { FC } from 'react';

interface InfoProps {
   label: string;
   value: string;
}

const Info: FC<InfoProps> = ({ label, value }) => {
   return (
      <p className="weather__key">
         {" "}
         {label}:
         <span className="weather__value">
            {" "}
            {value}{" "}
         </span>
      </p>
   )
}

export default Info;