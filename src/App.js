import './App.css';
import HomePage from './pages/homePage/index';
import AboutPage from './pages/aboutPage/index';
import SkillPage from './pages/skillPage/index';
import ServicesPage from './pages/servicesPage/index';
import PortfolioPage from './pages/portfolioPage';
import ContactPage from './pages/contactPage/index';

function App() {
  return (
    <div className="App">
      My Portfolio
      <HomePage />

      <AboutPage/>

      <SkillPage/>

      <ServicesPage />

      <PortfolioPage />

      <ContactPage />
    </div>
  );
}

export default App;
