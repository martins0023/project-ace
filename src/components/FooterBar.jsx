import React from "react";

const FooterBar = () => {
  return (
    <div className="bg-primary w-full h-fit py-5">
      <p className="font-poppins text-white justify-center flex items-center">
        Copyright 2025 {` `} 
        <span className="ml-1 underline font-semibold uppercase hover:text-blue-700 cursor-pointer">
          
          project ace
        </span>
        . All rights reserved
      </p>
    </div>
  );
};

export default FooterBar;
