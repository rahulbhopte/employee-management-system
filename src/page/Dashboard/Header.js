import React from "react";

export default function Header({setIsAdding}) {
    
  return (
    <header>
      <h1>Employee Mangement Software</h1>
      <div>
        <button onClick={()=>setIsAdding(false)} className="round-button">
          Add Employee
        </button>
      </div> 
    </header>
  );
}
