import React, { useState } from 'react';
import Data from './component/Fatarrow';

const App=()=> {
  const [count, setCount] = useState(0);

  let obj = [
    {
      item: 'food',
      price: 3500,
    },
    {
      item: 'shopping',
      price: 4500,
    },
    {
      item: 'transport',
      price: 1200,
    },
  ];

  return (
    <>
      <div>
        <h1>Expenses</h1>
        {obj.map((list, index) => (
          <Data key={index}>
            <h3>{list.item}====={list.price}</h3>
          </Data>
        ))}
      </div>
    </>
  );
}

export default App;
