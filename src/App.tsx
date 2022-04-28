import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';

export const Header: FC = () => {
  return <header>Northstar</header>
};

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
