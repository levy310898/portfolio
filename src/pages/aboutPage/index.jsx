import React from 'react'
import './aboutPage.css';
import {icon} from '../../constant/data';

const classNames = require('classnames');

export default function index() {
  return (
    <div className="section about" id = 'about'>
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={`${process.env.PUBLIC_URL}/img/aboutPic.png`} alt="About me" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sed nam reprehenderit voluptatibus debitis accusamus libero quasi rem recusandae id.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">5</span>
              <span className="about__info-name">Years <br />University</span>
            </div>

            <div>
              <span className="about__info-title">1</span>
              <span className="about__info-name">Year <br />experience</span>
            </div>

            <div>
              <span className="about__info-title">03+</span>
              <span className="about__info-name">Completed <br />Projects</span>
            </div>
          </div>
          <div className="about__buttons">
            <a download="" href={`${process.env.PUBLIC_URL}/CV.pdf`} className="button button--flex">
              Download CV <i className={classNames(icon.downloadFile, ['button__icon'])}></i>
            </a>
          </div>
        </div>

        
      </div>
    </div>
  )
}

  