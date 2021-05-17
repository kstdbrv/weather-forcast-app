import React from 'react';
import CardForcast from './components/card-forcast/CardForcast';
import CardPast from './components/card-past/CardPast';
import Layout from './components/layout/Layout';
import './app.scss';

const App:React.FC = () => {
  return (
    <div className="wrapper">
      <Layout />
      <CardForcast />
      <CardPast />
    </div>
  );
}

export default App;
