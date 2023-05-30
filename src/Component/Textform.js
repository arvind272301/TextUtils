import React, { useState } from 'react';

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text Converted UpperCase successfully.', 'success');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text Converted lowerCase successfully.', 'success');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert('Copied to Clipboard!.', 'success');
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/\s+/g);
    setText(newText.join(' '));
    props.showAlert('Text Space Removed!.', 'success');
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Text Cleared!', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className='mb-2'>
          <textarea
            className='form-control'
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : '#13466e',
              color: props.mode === 'dark' ? 'white' : 'black',
              fontSize: '1.2rem',
            }}
            id='myBox'
            rows='8'
            placeholder='Enter text here-'
          />
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>
          Clear Text
        </button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>
          Copy Text
        </button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleRemoveExtraSpaces}>
          Remove Extra Space
        </button>
      </div>

      <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/g).filter((element) => {
            return element.length !== 0;
          }).length}{' '}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/g).filter((element) => element.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </>
  );
}
