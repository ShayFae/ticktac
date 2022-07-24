import React, { useState } from "react";
import './Game.css'

export default function Game() {
  const [state, setState] = useState(false);
  const [g, setG] = useState([]);
  const [g2, setG2] = useState([]);
  const [g3, setG3] = useState([]);
  const [g4, setG4] = useState([]);
  const [g5, setG5] = useState([]);
  const [g6, setG6] = useState([]);

  const [g7, setG7] = useState([]);
  const [g8, setG8] = useState([]);
  const [g9, setG9] = useState([]);

  const reset = () => {
    window.location.reload();
  }

  //Make into one
  // const [l, setL] = useState({
  //   one: [],
  //   two: [],
  //   three: [],
  //   four: [],
  // });

  const turn = () => {
    setState(!state);
    {React.createElement('p', {onClick: turn})};
    if(state === true) {
      setG('X');
    } else {
      setG('O');
    }
  }

  const turn2 = () => {
    setState(!state);
    {React.createElement('p', {onClick: turn})};
    if(state === true) {
      setG2('X');
    } else {
      setG2('O');
    }
  }
  const turn3 = () => {
    setState(!state);
    {React.createElement('p', {onClick: turn})};
    if(state === true) {
      setG3('X');
    } else {
      setG3('O');
    }
  }

  const turn4 = () => {
    setState(!state);
    {React.createElement('p', {onClick: turn})};
    if(state === true) {
      setG4('X');
    } else {
      setG4('O');
    }
  }

  const turn5 = () => {
    setState(!state);
    {React.createElement('p', {onClick: turn})};
    if(state === true) {
      setG5('X');
    } else {
      setG5('O');
    }
  }
  const turn6 = () => {
    setState(!state);
    {React.createElement('p', {onClick: turn})};
    if(state === true) {
      setG6('X');
    } else {
      setG6('O');
    }
  }

  const turn7 = () => {
    setState(!state);
    {React.createElement('p', {onClick: turn})};
    if(state === true) {
      setG7('X');
    } else {
      setG7('O');
    }
  }

  const turn8 = () => {
    setState(!state);
    {React.createElement('p', {onClick: turn})};
    if(state === true) {
      setG8('X');
    } else {
      setG8('O');
    }
  }
  const turn9 = () => {
    setState(!state);
    {React.createElement('p', {onClick: turn})};
    if(state === true) {
      setG9('X');
    } else {
      setG9('O');
    }
  }

const meep = () => {
   return <div className="container" id="h">
   {React.createElement('div', {class: 'test', onClick: turn, id: '1'}, `${g}`)}   
   {React.createElement('div', {class: 'test', onClick: turn2, id: '2'}, `${g2}`)}  
   {React.createElement('div', {class: 'test', onClick: turn3, id: '3'}, `${g3}`)}   

   {React.createElement('div', {class: 'test', onClick: turn4, id: '4'}, `${g4}`)}  
   {React.createElement('div', {class: 'test', onClick: turn5, id: '5'}, `${g5}`)}  
   {React.createElement('div', {class: 'test', onClick: turn6, id: '6'}, `${g6}`)}  

   {React.createElement('div', {class: 'test', onClick: turn7, id: '7'}, `${g7}`)}
   {React.createElement('div', {class: 'test', onClick: turn8, id: '8'}, `${g8}`)} 
   {React.createElement('div', {class: 'test', onClick: turn9, id: '9'}, `${g9}`)} 
   </div>
} 

//Combos
//Ro
//1-2-3
//4-5-6
//7-8-9

//Col
//1-4-7
//2-5-8
//3-6-9

//di
//1-5-9
//3-5-7

  return(
    <div id="h">
      {/* <div id="hello">hello</div> */}
      <h1>Tic Tac Toe</h1>
      {meep()}
      {state === true && <h1>X TURN</h1>}
      {state === false && <h1>O TURN</h1>}
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}