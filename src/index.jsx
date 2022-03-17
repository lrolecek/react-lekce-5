import React from 'react';
import { render } from 'react-dom';
import './style.css';

import ShoppingItem from './components/ShoppingItem';

// const jmeno = 'Jirka';

// const prijmeniEl = <h2>Novák</h2>;

// const mestaEl = [
//   <h3>Praha</h3>,
//   <h3>Brno</h3>,
//   <h3>Ostrava</h3>,
// ]

// const names = [
//   'Alena',
//   'Jana',
//   'Emil',
//   'Jindřiška',
//   'Pedro Gonzales',
// ];

// const namesEl = names.map(name => <p>{ name }</p>);


const list = [
  { product: 'mrkev', amount: '3ks', bought: false },
  { product: 'paprika', amount: '2ks', bought: true },
  { product: 'cibule', amount: '2ks', bought: false },
  { product: 'čínské zelí', amount: '1ks', bought: true },
  { product: 'arašídy', amount: '250g', bought: false },
  { product: 'sojová omáčka', amount: '1ks', bought: false },
];

const App = () => {
  return (
    <>
      <h1>Nákupní seznam</h1>

      <ul>
      {list.map(item =>
        <ShoppingItem
          product={item.product}
          amount={item.amount}
          bought={item.bought}
        />
      )}
      </ul>

      {/* <ul>
        { names.map(name => <li>{ name }</li>) }
      </ul> */}

      {/*
        <p>{jmeno}</p>
        { prijmeniEl }
        { mestaEl }
      */}
    </>
  );
}

render(<App />, document.querySelector('#app'));
