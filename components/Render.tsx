import { useState } from 'react';
import React from 'react';

function GoalsAssists() { //State to check if the user wants to see goals(true) or assists(false)
  const [showActive, setShowActive] = useState(true);

  const items = [ //List for boths goals and assists, true = goals and false = assists
    { name: '1: Christian Pulisic (4 Goals)', active: true },
    { name: '2: Youssouf Fofana (1 Goal) ', active: true },
    { name: '3: Luka Modric (1 Goal) ', active: true },
    { name: '4: Alexis Saelemakers (1 Goal) ', active: true },
    { name: '5: Ruben Loftus-Cheek (1 Goal) ', active: true },
    { name: '1: Christian Pulisic (2 Assists) ', active: false },
    { name: '2: Luka Modric (1 Assists)', active: false },
    { name: '3: Adrien Rabiot (1 Assists)', active: false },
    { name: '4: Alexis Saelemakers (1 Assists)', active: false },
    { name: '5: Youssouf Fofana (1 Assists)', active: false },
  ];

  const filteredItems = items.filter(item => item.active === showActive); //Filter to display what list is being selected depending on the state

  return ( //Contains the buttons for both goals and assists lists, and the selected list will display
    <div>
      <div>
        <button onClick={() => setShowActive(true)}>Click here to see top goal scorers for Milan this season in the Serie A!</button>
        <br></br>
        <br></br>
        <button onClick={() => setShowActive(false)}>Click here to see players with the most assists for Milan this season in the Serie A!</button>
      </div>
      <ul>
        <br></br>
        {filteredItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <GoalsAssists/>
    </div>
  );
}