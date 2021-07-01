import React, { Component } from 'react';
import { icon,personalInfo } from '../../constant/data';
import './contactPage.css';

const classNames = require('classnames');
class index extends Component {

  renderInfo = (info,title,iconName) => {
    return (
        <div className="contact__infomation">
          <i className={classNames(icon[iconName], ['contact__icon'])} />
          <div>
            <h3 className="contact__title">{title}</h3>
            <div className="contact__subtitle">{ personalInfo[info]}</div>
          </div>
        </div>
    );
  }
  render() {
    return (
      <div className = 'section contact'>
        <h2 className="section__title">Contact me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
          <div>
            {this.renderInfo('phone', 'call me', 'phone')}
            {this.renderInfo('email', 'Email', 'email')}
            {this.renderInfo('location', 'location', 'location')}
          </div>

          <form action="" className="contact__form grid">
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="" className="contact__label">Name</label>
                <input type="text" className="contact__input" />
              </div>

              <div className="contact__content">
                <label htmlFor="" className="contact__label">Email</label>
                <input type="text" className="contact__input" />
              </div>

              <div className="contact__content">
                <label htmlFor="" className="contact__label">Message</label>
                <textarea name="" id="" cols="30" rows="10" className = 'contact__input'></textarea>
              </div>
              <div>
                <a href="#contact" className="button button--flex">Send Message
                <i className = {classNames(icon.contact,['button__icon'])}></i>
                </a>
              </div>
            </div>
          </form>
        </div>
        
      </div>
    );
  }
}

export default index;