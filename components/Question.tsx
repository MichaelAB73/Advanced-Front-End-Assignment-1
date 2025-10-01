import { useState } from 'react';
import React from 'react';

function Trivia() {
  const [input1, setInput1] = useState('');
  const [message1, setMessage1] = useState('');

  const [input2, setInput2] = useState('');
  const [message2, setMessage2] = useState('');

  const [input3, setInput3] = useState('');
  const [message3, setMessage3] = useState('');

  const handleSubmit1 = (event: any) => {
    event.preventDefault();
      if (input1 === '7') {
        setMessage1('You are correct! AC Milan has won a total of 7 Champions League in their history!');
      } else {
        setMessage1('Incorrect, give it another shot!');
      }
        setInput1('');
      };

  const handleSubmit2 = (event: any) => {
    event.preventDefault();
      if (input2 === '1899') {
        setMessage2('You are correct! AC Milan was founded in 1899 by Herbert Kilpin');
      } else {
        setMessage2('Incorrect, give it another shot!');
      }
        setInput2('');
      };

  const handleSubmit3 = (event: any) => {
      event.preventDefault();
      if (input3 === 'San Siro') {
        setMessage3('You are correct! AC Milan curretnly play at the San Siro, and share the famoust venue with their rivals, Inter Milan');
      } else {
        setMessage3('Incorrect, give it another shot!');
      }
        setInput3('');
      };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit1}>
          <h2>How many Champions Leagues have Milan won?</h2>
          <input value={input1} onChange={(e) => setInput1(e.target.value)} placeholder="Insert Answer Here"/>
          <button type="submit">Submit</button>
        </form>
        {message1 && <p>{message1}</p>}
      </div>
      <br></br>
      <div>
        <form onSubmit={handleSubmit2}>
          <h2>What year was AC Milan founded?</h2>
          <input value={input2} onChange={(e) => setInput2(e.target.value)} placeholder="Insert Answer Here"/>
          <button type="submit">Submit</button>
        </form>
        {message2 && <p>{message2}</p>}
      </div>
      <br></br>
      <div>
        <form onSubmit={handleSubmit3}>
          <h2>Which stadium does AC Milan play in?</h2>
          <input value={input3} onChange={(e) => setInput3(e.target.value)} placeholder="Insert Answer Here"/>
          <button type="submit">Submit</button>
        </form>
        {message3 && <p>{message3}</p>}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Trivia/>
    </div>
  );
}
