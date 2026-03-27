import React from "react";


type ButtonProps = {
  children: React.ReactNode;
  className?:string;
  onClick?: () => void;
};

export default function Button({ children,className, onClick }: ButtonProps){
    return(
        <button 
       
        onClick={onClick} 
        className={`bg-black px-4 py-2.5 rounded-2xl text-white text-[16px]`}>
            {children}
        </button>
    )
}