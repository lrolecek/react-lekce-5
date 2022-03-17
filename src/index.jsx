import React from 'react';
import { render } from 'react-dom';
import './style.css';



const names = [
  'Alena',
  'Jana',
  'Emil',
  'Jindřiška',
  'Pedro Gonzales',
];

const jmeno = 'Jirka';

const prijmeniEl = <h2>Novák</h2>;

const mestaEl = [
  <h3>Praha</h3>,
  <h3>Brno</h3>,
  <h3>Ostrava</h3>,
]

const App = () => {
  return (
    <>
      <p>{jmeno}</p>
      { prijmeniEl }
      { mestaEl }
    </>
  );
}

render(<App />, document.querySelector('#app'));
