// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import Timer from './Timer';
import './App.css';

const App: FC = () => {
  return (
    <div className="container">
      <header>
        <h1>タイマー</h1>
      </header>
      <Timer limit={10} />
    </div>
  );
};

export default App;
