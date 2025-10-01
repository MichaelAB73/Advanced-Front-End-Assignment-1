import { useState } from 'react';
import React from 'react';

function Trivia() {
  const [input1, setInput1] = useState(''); //input1 will take the users input for Question 1, setInput1 will be the function that holds the users input
  const [message1, setMessage1] = useState(''); //Same concept for this line, message1 will store last displayed message, and setMessage1 will be the function called to change the Message

  const [input2, setInput2] = useState(''); //input2 will take the users input for Question 2, setInput2 will be the function that holds the users input
  const [message2, setMessage2] = useState('');//Same concept for this line, message2 will store last displayed message, and setMessage2 will be the function called to change the Message

  const [input3, setInput3] = useState(''); //input3 will take the users input for Question 3, setInput3 will be the function that holds the users input
  const [message3, setMessage3] = useState(''); //Same concept for this line, message3 will store last displayed message, and setMessage3 will be the function called to change the Message

  const handleSubmit1 = (event: any) => { //Function for the first question with preventDefault which prevents the page from refreshing.
    event.preventDefault();
      if (input1 === '7') { //If User Input is exactly 7, then setMessage1 correct message appears, else will display setMessage1 incorrect message
        setMessage1('You are correct! AC Milan has won a total of 7 Champions League in their history!');
      } else {
        setMessage1('Incorrect, give it another shot!');
      }
        setInput1(''); //Clears input field after form is submitted
      };

  const handleSubmit2 = (event: any) => { //Function for the second question with preventDefault which prevents the page from refreshing.
    event.preventDefault();
      if (input2 === '1899') { //If User Input is exactly 1899, then setMessage2 correct message appears, else will display setMessage2 incorrect message
        setMessage2('You are correct! AC Milan was founded in 1899 by Herbert Kilpin');
      } else {
        setMessage2('Incorrect, give it another shot!');
      }
        setInput2(''); //Clears input field after form is submitted
      };

  const handleSubmit3 = (event: any) => { //Function for the third question with preventDefault which prevents the page from refreshing.
      event.preventDefault();
      if (input3 === 'San Siro') { //If User Input is exactly San Siro, then setMessage3 correct message appears, else will display setMessage3 incorrect message
        setMessage3('You are correct! AC Milan curretnly play at the San Siro, and share the famoust venue with their rivals, Inter Milan');
      } else {
        setMessage3('Incorrect, give it another shot!');
      }
        setInput3(''); //Clears input field after form is submitted
      };

  return (  //Shows each question with an input box and submit button, and displays a message after answering.
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
