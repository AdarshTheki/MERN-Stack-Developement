import React, {useState} from 'react';    // hooks

export default function TextForms(props) {
   const upperCaseHandler = () => {
      let newText = text.toUpperCase();
      setText(newText);
   }
   const lowerCaseHandler = () => {
      let newText = text.toLowerCase();
      setText(newText);
   }

   const handleOnChange = (event) => {
      setText(event.target.value);
   }

   const copyTextHandler = () => {
      var text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
   }

   const handleExtraSpaces = () => {
      var newText = text.split(/[ ]+/);
      setText(newText.join(" "))
   }

   const [text, setText] = useState('Enter text Here: ');

   return (
   <>
   <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={upperCaseHandler}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={lowerCaseHandler}>Convert to Lower Case</button>
      <button className="btn btn-primary mx-2" onClick={copyTextHandler}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
   </div>
   <div className="container my-2">
      <h1>Your text Summery</h1>
      <p>{text.split(' ').length} words, and {text.length} characters</p>
      <p>{0.008 * text.split(' ').length} Minutes Read This.</p>
      <h2>Preview</h2>
      <p>{text}</p>
   </div>
   </>
   );
}
