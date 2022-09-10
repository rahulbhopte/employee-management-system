import React from "react";

export default function Header(props) {
    
  return (
    <header>
      <h1>Employee Mangement Software</h1>
      <div>
        <button onClick={(props)=>{props.setIsAdding=true}} className="round-button">
          Add Employee
        </button>
      </div> 
    </header>
  );
}
