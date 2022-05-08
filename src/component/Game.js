import React from "react";
import './Game.css'

export default function Game() {
const meep = () => {
   return <div className="container">
   {React.createElement('div', {class: 'test', onClick: () => {alert('Hello')}})}   
   {React.createElement('div', {class: 'test', onClick: () => {alert('Hello')}})}
   {React.createElement('div', {class: 'test', onClick: () => {alert('Hello')}})}

   {React.createElement('div', {class: 'test', onClick: () => {alert('Hello')}})}
   {React.createElement('div', {class: 'test', onClick: () => {alert('Hello')}})}
   {React.createElement('div', {class: 'test', onClick: () => {alert('Hello')}})}

   {React.createElement('div', {class: 'test', onClick: () => {alert('Hello')}})}
   {React.createElement('div', {class: 'test', onClick: () => {alert('Hello')}})}
   {React.createElement('div', {class: 'test', onClick: () => {alert('Hello')}})}
   </div>

} 

  return(
    <div>
      <h1>Tic Tac Toe</h1>
      {meep()}
    </div>
  );
}