import React, { Component } from 'react';
import { Carousel } from 'antd';
import { icon,portfolio } from '../../constant/data';
import './portfolioPage.css';
import  Flickity  from 'react-flickity-component';
const classNames = require('classnames');

// const Flickity = require('react-flickity');
class index extends Component {

  renderPortfolio = portfolio=>{
    return portfolio.map((item,index)=>
    <div key = {index} style = {{width:'90%'}} className = 'portfolio__carousel'>
      <div className="portfolio__content grid">
        <img src={`${process.env.PUBLIC_URL}/${item.img}`} alt={item.name} className="portfolio__img" />

        <div className="portfolio__data">
          <div className="portfolio__title">{item.name}</div>
          <div className="portfolio__description">
            {item.description && item.description!=='' ? item.description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nostrum eius odit aperiam modi, iusto quibusdam perspiciatis. Sint, accusamus delectus!'}
            </div>
          <div className = 'portfolio__button-box'>
          <a href="#portfolio" className="button button--flex button--small">
            Demo <i className = {classNames(icon.arrowRight,['button__icon'])}></i>
          </a>
          </div>
          
        </div>
      </div>
    
    </div>
    )
  }
  
  render() {
    const settings = {
      arrows:true
    };

    const flickityOptions = {
      //initialIndex: 1,
      // cellSelector: '.sliderBoxes',
      //pageDots: true,
      //wrapAround: true,
      cellAlign: 'left',
      contain: true,
      groupCell:'100%',
    };
    return (
      <div className = 'portfolio section' id = "portfolio">
        <h2 className="section__title">portfolio</h2>
        <span className="section__subtitle">Most recent works</span>

        
        <div className="container portfolio__container">
          {/* <Carousel {...settings}>
          {this.renderPortfolio(portfolio)}
          </Carousel> */}

          <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
          >
            {this.renderPortfolio(portfolio)}
          </Flickity>
          
          <div className="slideButton">

          </div>

        </div>
      </div>
    );
  }
}

export default index;