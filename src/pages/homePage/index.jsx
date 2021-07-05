import React from 'react';
import {personalInfo,icon} from '../../constant/data.js';
import './homePage.css';

const classNames = require('classnames');
export default function index() {

  const renderLink = name=><a target = '_blank' rel = "noreferrer" href = {personalInfo[name]} className = "home__social-icon">
    <i className = {icon[name]}></i>
  </a>
  return (
    <div className="section home" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            {renderLink('facebook')}
            {renderLink('github')}
            {renderLink('linkedin')}
          </div>

          <div className="home__image">
            {/* <img src={`${process.env.PUBLIC_URL}/img/blob.svg`} alt="avatar" /> */}

            <svg className = "home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
              </mask>
              <g mask="url(#mask0)" className = "home__blob-img-box">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                <image className = "home__blob-img" href={`${process.env.PUBLIC_URL}/img/avatar.png`}/>
              </g>
          </svg>
          </div>

          <div className="home__data">
            <div className="home__title">Hi, I'am Lê Hồ Vỹ</div>
            <div className="home__subtitle"> Frontend developer</div>
            <p className="home__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur consectetur aspernatur officia eos? Enim iste dolorem quia odio ut pariatur.
            </p>
            <a href="#contact" className="button button--flex">
              Contact me <i className={classNames(icon.contact, ['button__icon'])}></i>
            </a>
          </div>
        </div>
      
        

        {/* <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <span className="home__scroll-name">Scroll down</span>
            <i class={classNames(icon.arrowDown, ['home__scroll-arrow'])}></i>
          </a>
        </div> */}
      </div>

      
    </div>
  )
}

