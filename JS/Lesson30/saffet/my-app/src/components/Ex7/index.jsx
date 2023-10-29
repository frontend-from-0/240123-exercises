import React from "react";
import './index.css';

export const Ex7 = () => {
  function parentHandleClick() {
    console.log("Parent element clicked");
  }

  function childHandleClick(event) {
    event.stopPropagation();
    console.log("Child element clicked");
  }

  return (
    <>
      <div className="parent" onClick={parentHandleClick}>
        <div className="child" onClick={childHandleClick}>Child-Parent Ex7</div>
      </div>
    </>
  );
};
