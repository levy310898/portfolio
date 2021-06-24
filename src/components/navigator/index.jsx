import React, { Component } from 'react'
import './index.css';
export default class Navigator extends Component {
    render() {
        return (
            <header className = "header" id = "header">
                <nav className = "nav container">
                    <a href = "#top" className = "nav__logo">LeVy</a>

                    <ul className = "nav__list">
                        <li className = "nav__item">
                            <a href="#home" className = "nav__link">Home</a>
                        </li>
                    </ul>

                    <ul className = "nav__list">
                        <li className = "nav__item">
                            <a href="#about" className = "nav__link">About</a>
                        </li>
                    </ul>

                    <ul className = "nav__list">
                        <li className = "nav__item">
                            <a href="#skill" className = "nav__link">Skills</a>
                        </li>
                    </ul>

                    <ul className = "nav__list">
                        <li className = "nav__item">
                            <a href="#service" className = "nav__link">Services</a>
                        </li>
                    </ul>

                    <ul className = "nav__list">
                        <li className = "nav__item">
                            <a href="#portfolio" className = "nav__link">Portfolio</a>
                        </li>
                    </ul>

                    <ul className = "nav__list">
                        <li className = "nav__item">
                            <a href="#contact" className = "nav__link">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
