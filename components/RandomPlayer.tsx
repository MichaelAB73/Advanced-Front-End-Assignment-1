import { useState } from 'react';
import React from 'react';

function RandomPlayer() {
  const [isHovered, setIsHovered] = useState(false);

  const player = {
    name: 'Santiago Gimenez',
    position: 'Striker',
    nationality: 'Mexican',
    games: 19,
    goals: 5,
    assists: 2,
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
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