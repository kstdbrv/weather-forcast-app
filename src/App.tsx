import React from 'react';
import CardForcast from './components/card-forcast/CardForcast';
import CardPast from './components/card-past/CardPast';
import Title from './components/header/Header';
import './app.scss';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Title />
      <div className="container">
       <Loader />
       <CardForcast />
       <CardPast />
      </div>
      <Footer />
    </div>
  );
}

export default App;
