import './App.css';
import Events from './Components/Events';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import MobileHrader from './Components/MobileHrader';
import Review from './Components/Review';
import Schedule from './Components/Schedule';
import Service from './Components/Service';
import Step from './Components/Step';
import SubscribeBox from './Components/SubscribeBox';
import Team from './Components/Team';

function App() {
  return (
    <>
      <Header />
      <MobileHrader />
      <Hero />
      <Step />
      <Schedule />
      <Service />
      <Feature />
      <Team />
      <Review />
      <Events />
      <SubscribeBox />
      <Footer />
    </>
  );
}

export default App;
