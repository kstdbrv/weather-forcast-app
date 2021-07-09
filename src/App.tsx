import React from 'react';
import CardForcast from './components/card-forcast/CardForcast';
import CardPast from './components/card-past/CardPast';
import Title from './components/header/Header';
import './app.scss';
import Footer from './components/footer/Footer';


const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Title />
      <main className="container">
       <CardForcast />
       <CardPast />
      </main>
      <Footer />
    </div>
  );
}

export default App;
