import React, { useState } from 'react'

export default function About() {
    const [myStyle,setMyStyle]=useState({
        color:'white',
        backgroundColor:'black'
    })
    const [btntext,setBtnText]=useState("Enable Dark Mode")
   const toggleStyle=()=>{
        if(myStyle.color=='black')
        {
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border:'2px solid white'
            })
            setBtnText("Enable Light Mode");
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white',
                border:'2px solid black'
            })
            setBtnText("Enable Dark Mode");
        }
    }
  return (
    <div className="container" style={myStyle}>
    <h2 className="my 5">About Us</h2>
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            style={myStyle}
          >
            <strong>Analyze Text</strong>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            It is a proper form to analyze the text we are having
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
            style={myStyle}
          >
           <strong> Free to Use</strong>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            It is a place where you can use it for free
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            style={myStyle}
          >
           <strong> Browser Compatible</strong>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
          It is fast and efficient
          </div>
        </div>
      </div>
    </div>
    <div className="container my-3">
    <button type="button" onClick={toggleStyle}class="btn btn-primary">{btntext}</button>
    </div>
  </div>
  )
}
