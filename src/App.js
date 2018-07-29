import React from 'react';
import robots from './robots';
import CardList from './CardList';

const App = () => (
  <div>
    <CardList robots={robots} />
  </div>
);

export default App;
