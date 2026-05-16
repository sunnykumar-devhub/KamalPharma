import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
