import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./components/Character";
import CharacterInfo from './components/Character'

// const dummyData = {
//   name: 'Luke Skywalker', 
//   height: '172', 
//   mass: '77', 
//   hair_color: 'blond', 
//   skin_color: 'fair'
// }

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setCharacters(res.data);
      })
      .catch (err => console.log('ERROR!!!'));
  }, [])

  return (
    <div className="App">
      {characters.map(char =>{
          return <CharacterInfo character = {char} key = {char.name}/>
        })
      } 
    </div>
  );
}

export default App;

/**
 *
0: {name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', …}
1: {name: 'C-3PO', height: '167', mass: '75', hair_color: 'n/a', skin_color: 'gold', …}
2: {name: 'R2-D2', height: '96', mass: '32', hair_color: 'n/a', skin_color: 'white, blue', …}
3: {name: 'Darth Vader', height: '202', mass: '136', hair_color: 'none', skin_color: 'white', …}
4: {name: 'Leia Organa', height: '150', mass: '49', hair_color: 'brown', skin_color: 'light', …}
5: {name: 'Owen Lars', height: '178', mass: '120', hair_color: 'brown, grey', skin_color: 'light', …}
6: {name: 'Beru Whitesun lars', height: '165', mass: '75', hair_color: 'brown', skin_color: 'light', …}
7: {name: 'R5-D4', height: '97', mass: '32', hair_color: 'n/a', skin_color: 'white, red', …}
8: {name: 'Biggs Darklighter', height: '183', mass: '84', hair_color: 'black', skin_color: 'light', …}
9: {name: 'Obi-Wan Kenobi', height: '182', mass: '77', hair_color: 'auburn, white', skin_color: 'fair', …}
 */
