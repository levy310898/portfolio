import React, { Component } from 'react'
import { icon,personalInfo } from '../../constant/data';
import './footer.css';

const classNames = require('classnames');

export default class index extends Component {
  renderLinkIcon = (personal,iconName) => {
    return (
      <a href={personalInfo[personal]} target='_blank' rel="noreferrer" className="footer__social">
        <i className= {classNames(icon[iconName])}></i>
      </a>
    )
  }
  render() {
    return (
      <div className = 'footer'>
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">LeVy</h1>
              <span className="footer__subtitle">Frontend developer</span>
            </div>

            <ul className="footer__links">
              <li>
                <a href="#about" className="footer__link">About</a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="footer__link">contact</a>
              </li>
            </ul>

            <div className="footer__socials">
              {this.renderLinkIcon('facebook','facebook')}
              {this.renderLinkIcon('github','github')}
              {this.renderLinkIcon('linkedin','linkedin')}
            </div>

            <div></div>
          </div>
        </div>
      </div>
    )
  }
}
