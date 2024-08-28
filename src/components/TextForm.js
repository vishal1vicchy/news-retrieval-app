import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TextForm(props) {
    const [text, setText] = useState("enter the text");
 
    const handleUpClick = (event) => {
        event.preventDefault();
        let newt = text.toUpperCase();
        setText(newt);
    }

    const handleLowClick = (event) => {
        event.preventDefault();
        let newt = text.toLowerCase();
        setText(newt);
    }

    const handleClearClick = (event) => {
        event.preventDefault();
        let newt = '';
        setText(newt);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied","success")
    }
    const handleReverseClick = (event) => {
        event.preventDefault();
        let newt = text.split('').reverse().join('');
        setText(newt);
    }
    const handleSpeakClick = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
    }
    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "myfile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        document.body.removeChild(element);
    }
    
    
    return (
        <>
            <h1>Try Word Counter</h1>
            <div className="container" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <form>
                    {props.heading}
               

                    <div className="form-group">
                        <textarea
                            className="form-control"
                            id="myBox"
                            value={text}
                            onChange={handleOnChange}
                            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'light', color: props.mode === 'dark' ? 'white' : 'black' }}
                            rows="12"
                        ></textarea>
                    </div>
                    <button className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className='btn btn-danger mx-2 my-1' onClick={handleLowClick}>Convert to Lower Case</button>
                    <button className='btn btn-success mx-2 my-1' onClick={handleClearClick}>Clear Text</button>
                    <button className='btn btn-success mx-2 my-1' onClick={handleCopy}>Copy</button>
                    <button className='btn btn-warning mx-2 my-1' onClick={handleReverseClick}>Reverse Text</button>
                    <button className='btn btn-secondary mx-2 my-1' onClick={handleSpeakClick}>Speak Text</button>
                    <button className='btn btn-primary mx-2 my-1' onClick={handleDownload}>Download Text</button>


                </form>
            </div>
            <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h2>Preview of the text</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
                
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
};

export default TextForm;
