
// import React, { useEffect } from 'react';
import React, { Component } from 'react'
import HomePage from './pages/homePage/index';
import AboutPage from './pages/aboutPage/index';
import SkillPage from './pages/skillPage/index';
import PortfolioPage from './pages/portfolioPage';
import ContactPage from './pages/contactPage/index';
import Navigator from './components/navigator/index';
import Footer from './pages/footer/index';
import {setTheme} from './redux/actions/actionTheme';
import './App.css';
//redux
import { connect } from 'react-redux';

const classNames = require('classnames');
class App extends Component {
  componentDidMount() {
    const darkTheme = localStorage.getItem('darkTheme');
    darkTheme && this.props.setTheme(JSON.parse(darkTheme));
  }
  render() {
    return (
      <div className={classNames('App',{['dark-theme']:this.props.darkTheme})}>

        <Navigator />

        <HomePage />

        <AboutPage />

        <SkillPage />

        <PortfolioPage />

        <ContactPage />

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    darkTheme: state.darkTheme
  }
}

const mapDispatchToProps = {
  setTheme,
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
