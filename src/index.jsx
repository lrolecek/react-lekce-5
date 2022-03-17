import React from 'react';
import { render } from 'react-dom';
import './style.css';


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


const App = () => {
  return (
    <>





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
