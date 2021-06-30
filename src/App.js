import './App.css';
import HomePage from './pages/homePage/index';
import AboutPage from './pages/aboutPage/index';
import SkillPage from './pages/skillPage/index';
import PortfolioPage from './pages/portfolioPage';
import ContactPage from './pages/contactPage/index';
import Navigator from './components/navigator/index';

function App() {
  return (
    <div className="App">

      <Navigator />
      
      <HomePage />

      <AboutPage/>

      <SkillPage/>

      <PortfolioPage />

      <ContactPage />
    </div>
  );
}

export default App;
