// src/App.jsx
import './App.css';
import { useState } from 'react';

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalAg, setTotalAg] = useState(0) // totalAg - short for total agility
  const [totalStr,setTotalStr ] = useState(0) // short for total strength
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  )

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      setTotalStr(totalStr + fighter.strength);
      setTotalAg(totalAg + fighter.agility);
    }
    else {
      console.log('Not enough money.');
    }
    
  }

  const handleRemoveFighter = (fighter) => {
    const newTeamArr = team.filter((member) => member.name !== fighter.name); // creating a new array by removing the fighter we want to removve
    setTeam(newTeamArr);
    setMoney(money + fighter.price);
    setTotalStr(totalStr - fighter.strength);
    setTotalAg(totalAg - fighter.agility);

  };

  return (
    <>
      <h1>Hello world!</h1>
      {/* 1 */}
      <ul>
        {zombieFighters.map((fighter, i) => 
          <>
            <li key={i}>
                <img src={fighter.img} alt={fighter.name} />
                <li> {fighter.name} </li> 
                <li> Price: {fighter.price} </li>
                <li> Strength: {fighter.strength} </li>
                <li> Agility: {fighter.agility} </li>
                <li><button type='submit' onClick={() => handleAddFighter(fighter)}>Add</button></li>
            </li>  
          </>
        )}
      </ul>

      {/* 2 */}
      <div>
        <h2>Current Value: {money}</h2>
        <h3>Total Team Strength: {totalStr}</h3>
        <h4>Total Team Agility: {totalAg}</h4>
      </div>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((fighter, i) => (
            <li key={i}>
              <img src={fighter.img} alt={fighter.name} />
              <div>{fighter.name}</div>
              <div>Price: {fighter.price}</div>
              <div>Strength: {fighter.strength}</div>
              <div>Agility: {fighter.agility}</div>
              <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </>
      
  );
}

export default App
