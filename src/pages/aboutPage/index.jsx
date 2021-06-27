import React from 'react'
import './aboutPage.css';

export default function index() {
  return (
    <div className="section about" id = 'about'>
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src="" alt="" className="about__img" />

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
        </div>
      </div>
    </div>
  )
}

  