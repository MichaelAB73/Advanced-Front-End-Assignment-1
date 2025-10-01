import { useState } from 'react';
import React from 'react';

function RandomPlayer() { //This is the state to check if the block is being hovered
  const [isHovered, setIsHovered] = useState(false);

  const player = { //Player information that will show when the block is Hovered
    name: 'Santiago Gimenez',
    position: 'Striker',
    nationality: 'Mexican',
    games: 19,
    goals: 5,
    assists: 2,
  };

  const handleMouseOver = () => { //Function to set the hover to true
    setIsHovered(true);
  };

  const handleMouseOut = () => { //Function to set the hover to false
    setIsHovered(false);
  };

  return ( //Styling for each state followed by the players information that will be displayed when hovered and the message that will be displayed when not hovered
    <div> 
      <div 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut}
        style={{width: '170px', height: '200px', backgroundColor: isHovered ? 'black' : 'red', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
        {isHovered 
            ? (
                <div>
                    <p><strong>{player.name}</strong></p>
                    <p>Position: {player.position}</p>
                    <p>Nationality: {player.nationality}</p>
                    <p>Games Played: {player.goals}</p>
                    <p>Goals: {player.goals}</p>
                    <p>Assists: {player.assists}</p>
                </div>
             ) 
            : 'If you want to see our Random AC Milan player of the day, hover over me :)'
             }
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <RandomPlayer/>
    </div>
  );
}