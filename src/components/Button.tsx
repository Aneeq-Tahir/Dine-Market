interface ButtonProps {
   children: React.ReactNode;
   onClick: React.MouseEventHandler;
   count?: number;
   action?: string;
}

const Button = ({ children, onClick, count, action }: ButtonProps) => {
   return (
      <button
         disabled={action === "decrement" && count === 0 ? true : false}
         onClick={onClick}
         className="rounded-full hover:cursor-pointer border w-10 h-10 text-center p-2 font-semibold"
      >
         {children}
      </button>
   );
};

export default Button;
