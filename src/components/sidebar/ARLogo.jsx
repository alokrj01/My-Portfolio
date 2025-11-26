import React from "react";

const ARLogo = ({ theme }) => {
  const mainTextColor = theme === 'light' ? 'black' : 'white';

  return (
    <svg width="40" height="40" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
      
      <style>
        {`
          .logo-font {
            font-family: "Times New Roman", Garamond, serif;
            font-weight: bold;
            font-size: 120px;
            pointer-events: none;
          }
        `}
      </style>

      <text x="55" y="120" fill="red" className="logo-font">R</text>

      <text x="10" y="120" fill={mainTextColor} className="logo-font">A</text>
      
    </svg>
  );
};

export default ARLogo;