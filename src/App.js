import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Banner from './components/Banner/Banner';
import CustomerCare from './components/CustomerCare/CustomerCare';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/Navbar';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutUs />
      <Banner />
      <DownloadApp />
      <Services />
      <CustomerCare />
      <Footer />
    </div>
  );
}

export default App;
