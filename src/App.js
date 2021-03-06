import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

const App = () => {
  return (
    <div>
      <Translate />
      {/* <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        /> */}
      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
    </div>
  );
};

export default App;
