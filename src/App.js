import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end JS framework',
  },
  {
    title: 'Why use React?',
    content: 'Because React is the best',
  },
  {
    title: 'React',
    content: 'Yeeeees',
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
