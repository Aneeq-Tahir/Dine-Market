"use client";
import React, { useState } from "react";

const Button = ({
   children,
   onClick,
}: {
   children: React.ReactNode;
   onClick: React.MouseEventHandler;
}) => {
   return (
      <div onClick={onClick} className="rounded-full hover:cursor-pointer border w-10 h-10 text-center p-2 font-semibold">
         {children}
      </div>
   );
};

const Quantity = () => {
   const [count, setCount] = useState(0);
   return (
      <div className="flex items-center gap-3">
         <h1 className="text-xl font-semibold">Quantity:</h1>
         <Button onClick={() => setCount(count - 1)}>-</Button>
         <p className="text-lg font-bold">{count > 0 ? count : 0}</p>
         <Button onClick={() => setCount(count + 1)}>+</Button>
      </div>
   );
};

export default Quantity;
