import React from 'react';
import './App.css';
import IntroSection from './components/IntroSection';
import Introduction from './components/Introduction';
import Benefits from './components/Benefits';
import Visuals from './components/Visuals';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <IntroSection/>
      <Benefits/>
      <Introduction/>
      {/* <Explanation/> */}
      <Visuals/>
      <Pricing/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;