import React, { Component } from 'react'
import './navigator.css';

var classNames = require('classnames');

export default class Navigator extends Component {
    state = {
        isShowMenu:false,
    }

    handleDisplayMenu = ()=>{
        this.setState({isShowMenu:!this.state.isShowMenu});
    }
    render() {
        return (
            <header className = "header" id = "header">
                <nav className = "nav container">
                    <a href = "#top" className = "nav__logo">LeVy</a>

                    <div className={classNames('nav__menu',{'show-menu':this.state.isShowMenu})}>
                        <ul className = "nav__list grid">
                            <li className = "nav__item">
                                <a href="#home" className = "nav__link" onClick = {this.handleDisplayMenu}><i className="fas fa-home nav__icon"></i> Home</a>
                            </li>
                        
                            <li className = "nav__item">
                                <a href="#about" className = "nav__link" onClick = {this.handleDisplayMenu}><i className="fas fa-user  nav__icon"></i> About</a>
                            </li>
                        
                            <li className = "nav__item">
                                <a href="#skills" className = "nav__link" onClick = {this.handleDisplayMenu}><i className="fas fa-check-square  nav__icon"></i> Skills</a>
                            </li>
                        
                            <li className = "nav__item">
                                <a href="#services" className = "nav__link" onClick = {this.handleDisplayMenu}><i className="fas fa-briefcase  nav__icon"></i> Services</a>
                            </li>
                        
                            <li className = "nav__item">
                                <a href="#portfolio" className = "nav__link" onClick = {this.handleDisplayMenu}><i className="far fa-image  nav__icon"></i> Portfolio</a>
                            </li>
                        
                            <li className = "nav__item">
                                <a href="#contact" className = "nav__link" onClick = {this.handleDisplayMenu}><i class="fas fa-envelope  nav__icon"></i> Contact me</a>
                            </li>
                        </ul>
                        <i class="fas fa-times nav__close" onClick = {this.handleDisplayMenu}></i>
                    </div>

                    
                    <div className="nav__btns">
                        <div className="nav__toggle" onClick = {this.handleDisplayMenu}>
                        <i class="fas fa-bars"></i>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
