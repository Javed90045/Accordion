import React, { useState } from "react";
import data from "./data";
import "./Accordion.css";
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

//   function for single selection
  const handleSingleSelection = (getId) => {
    setSelected(getId === selected ? null : getId);
  };

//   functions for Multiple selection
  const handleMultipleSelection = (getId) => {
    let cpyMultiple = [...multiple]
    const findIndexOfCurrentId = cpyMultiple.indexOf(getId);
    console.log(findIndexOfCurrentId)
    if(findIndexOfCurrentId === -1)
    {
        cpyMultiple.push(getId)
    }
    else{
        cpyMultiple.splice(findIndexOfCurrentId, 1)
    }
    setMultiple(cpyMultiple)
    // console.log(multiple)
  };

  console.log(selected, multiple)

  return (
    <div className="wrapper">
      <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)
       }>Enable Multiselection</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItems) => (
            <div className="item" key={dataItems.id}>
              <div
                onClick={ enableMultiSelection 
                          ? () => handleMultipleSelection(dataItems.id)
                          : () => handleSingleSelection(dataItems.id)
                }
                className="title">
                <h3>{dataItems.question}</h3>
                <span> + </span>
              </div>
              { 
              enableMultiSelection
              ? multiple.indexOf(dataItems.id) !== -1 && (
                <div className="content">{dataItems.answer}</div>
              )
              : selected === dataItems.id && (
                <div className="content">{dataItems.answer}</div>
              ) }
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
