import React, { Component } from 'react';
import { icon } from '../../constant/data';

const classNames = require('classnames');
class index extends Component {
  render() {
    return (
      <div className = 'portfolio section' id = "portfolio">
        <h2 className="section__title">portfolio</h2>
        <span className="section__subtitle">Most recent works</span>

        <div className="portfolio__container container">
          <div>
            <div className="portfolio__content grid">
              <img src={`${process.env.PUBLIC_URL}/img/portfolio-1.jpg`} alt="" className="portfolio__img" />

              <div className="portfolio__data">
                <div className="portfolio__title">Project 1</div>
                <div className="portfolio__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nostrum eius odit aperiam modi, iusto quibusdam perspiciatis. Sint, accusamus delectus!</div>
                <a href="#portfolio" className="button button--flex button--small">
                  Demo <i className = {classNames(icon.arrowRight,['button__icon'])}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;