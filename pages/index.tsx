import React from 'react';
import Navbar from '../components/Navbar';
import Trivia from '../components/Question';
import GoalsAssists from '../components/Render';
import RandomPlayer from '../components/RandomPlayer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* HOME section includes basic styling, a title and a welcome message */}
      <section id="home" style={{ backgroundColor: "Red", color: "White", minHeight: "100px", textAlign: "center", padding: "5px"}}> 
        <h1 style={{ fontSize: "25px"}}>Hello and welcome to the AC Milan Fan Zone</h1>
        <br></br>
        <p>Your go-to spot for daily Rossoneri trivia, fresh stats, and more fun content for true Milan fans. Test your knowledge, track the numbers, and celebrate the red and black every single day.</p>
        <br></br>
        <h1 style={{ fontSize: "25px"}}>FORZA MILAN SEMPRE!</h1>
      </section>
      {/* STATS section includes basic styling and calls the component GoalsAssists */}
      <section id="stats" style={{ backgroundColor: "black", color: "white", padding: "2rem", minHeight: "100px"}}>
        <GoalsAssists/>
      </section>
      {/* TRIVIA section includes basic styling and calls the component Trivia */}
      <section id="trivia" style={{ backgroundColor: "white", color: "black", padding: "2rem", minHeight: "100px"}}>
        <Trivia />
      </section>
      {/* PLAYER section includes basic styling and calls the component RandomPlayer */}
      <section id="player" style={{ backgroundColor: "Red", color: "White", justifyContent: "center", alignItems: 'center', display: "flex"}}>
        <RandomPlayer/>
      </section>
    </div>
  );
}
