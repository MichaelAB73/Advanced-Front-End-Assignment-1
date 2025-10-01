import React from 'react';
import Navbar from '../components/Navbar';
import Trivia from '../components/Question';
import GoalsAssists from '../components/Render';
import RandomPlayer from '../components/RandomPlayer'

export default function Home() {
  return (
    <div>
      <Navbar/>

      <section id="home" style={{ backgroundColor: "Red", color: "White", minHeight: "100px", textAlign: "center", padding: "5px"}}>
        <h1 style={{ fontSize: "25px"}}>Hello and welcome to the AC Milan Fan Zone</h1>
        <br></br>
        <p>Your go-to spot for daily Rossoneri trivia, fresh stats, and more fun content for true Milan fans. Test your knowledge, track the numbers, and celebrate the red and black every single day.</p>
        <br></br>
        <h1 style={{ fontSize: "25px"}}>FORZA MILAN SEMPRE!</h1>
      </section>

      <section id="stats" style={{ backgroundColor: "black", color: "white", padding: "2rem", minHeight: "100px"}}>
        <GoalsAssists/>
      </section>

      <section id="trivia" style={{ backgroundColor: "white", color: "black", padding: "2rem", minHeight: "100px"}}>
        <Trivia />
      </section>

      <section id="player" style={{ backgroundColor: "Red", color: "White", justifyContent: "center", alignItems: 'center', display: "flex"}}>
        <RandomPlayer/>
      </section>

    </div>
  );
}
