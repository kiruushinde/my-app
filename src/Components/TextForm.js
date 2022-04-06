import React, { useState } from 'react'

// so in this lesson we learnt about the how to set texts and how to handle the events
// here we converted the text from lower case to upper case

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("UpperCase was clicked.." + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("text has converted to upper case..", "Success !");
        // setText("You have clicked on handleUpClick");
    }
    
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("text has converted to lower case..", "Success !");
    }
    
    const handleClrClick = () => {
        let newText = " ";
        setText(newText);
        props.showAlert("Your text has been cleared..", "Success !");
    }
    
    const handleCopy = () => {
        let newText = document.getElementById("myText");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        
        props.showAlert("text copied..", "Success !");
        // alert("Text coped !");
    }
    
    const handleExtSpaces = () => {
        // let newText = document.getElementById("myText");
        let newText = text.replace(/ +/g, ' ');
        setText(newText);
        props.showAlert("extra spaces has been removed..", "Success !");

    }

    const handleSrchClick = () => {
        let str = prompt("enter the string you wanna search :");
        let newText = text.includes(str, 0);
        if (newText == true){
            setText("the string " + str + " is present..");
        }
        else{
            setText("the string " + str + " is not present..");
        }
    }

    const handleOnChange = (event) => {
        // console.log("On change..");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    // text = "Enter the new text :"; wrong way to change the text
    // setText("enter the text here.."); //correct way to change the text

    return (
        <div className="m-auto shadow-xl my-6 w-[380px] h-[620px] bg-white rounded-md">
            <div className="container">
                <form className="flex justify-center my-4 items-center mx-16">
                    <label className="block">
                        <span className="block mt-2 text-xl">Username :</span>
                        <input className="block outline outline-slate-200 rounded-sm p-1 my-3 w-60 placeholder:px-2" type="text" name="name" placeholder='Enter you name..' />

                        <span className="block text-xl">Email :</span>
                        <input className="block peer-first: placeholder:px-2 outline hover:outline-pink-300 outline-slate-200 rounded-sm p-1 my-3 w-60" type="email" name="email" placeholder='Enter you email id ' />

                        <span className="block text-xl">Password :</span>
                        <input className="block outline outline-slate-200 placeholder:px-2 rounded-sm p-1 my-3 w-60" type="password" name="email" placeholder='Enter you email id ' />

                        <h2 className='text-lg font-medium'>{props.heading}</h2>
                        <div>
                            <textarea placeholder='Enter text here...' value={text} onChange={handleOnChange} name="txt" id="myText" cols="30" rows="5" className='outline outline-2 shadow-sm outline-slate-200 mt-2 p-1 rounded-sm'></textarea>
                        </div>

                        <button type='button' className='text-sm px-2 bg-blue-500 text-white rounded-md font-bold py-1.5 mt-4' onClick={handleUpClick}>Convert to UpperCase</button>

                        <button type='button' className='text-sm px-2 m-2 mx-1 bg-blue-500 text-white rounded-md font-bold py-1.5 mt-2' onClick={handleCopy}>Copy Text</button>

                        <button type='button' className='text-sm px-4 bg-blue-500 text-white rounded-md font-bold py-1.5 mt-0.5' onClick={handleLoClick}>Convert to LowerCase</button>

                        <button type='button' className='text-sm px-4 bg-blue-500 text-white rounded-md font-bold py-1.5 mt-2' onClick={handleClrClick}>Clear text</button>

                        <button type='button' className='text-sm px-3 m-2 bg-blue-500 text-white rounded-md font-bold py-1.5 mt-2' onClick={handleSrchClick}>Search String</button>

                        <button type='button' className='text-sm px-4 -mx-0.5 bg-blue-500 text-white rounded-md font-bold py-1.5 mt-0.5' onClick={handleExtSpaces}>Remove Extra Spaces</button>

                    </label>
                </form>
            </div>
            <div className="container my-10 mx-3">
                <h1 className='text-2xl font-bold'>Your text summary</h1>
                <p className='text-lg'>{text.split(" ").length} words, {text.length} characters</p>
                <p className='mt-2 text-lg'>{0.008 * text.split(" ").length} Minutes read</p>
                <h2 className='text-2xl font-bold text-gray-900 mt-2'>Preview</h2>
                <p className='text-sm outline outline-slate-200 p-2 rounded-md mt-2'>{text}</p>
            </div>
        </div>
    )
}
