import React, { Component } from 'react'
import { icon } from '../../constant/data';
import './skill.css';

var classNames = require('classnames');


export default class index extends Component {
  state = {
    isClose: false,
  }

  renderSkillBar = skills => skills.map((item, index) =>
    <div className="skills__data" key = {index}>
    <div className="skills__titles">
        <div className="skills__name">{item.name }</div>
        <span className="skills__number">{ item.percent}%</span>
    </div>

    <div className="skills__bar">
      <span className="skills__percentage" style = {{width:`${item.percent}%`}}></span>
    </div>
  </div>)
  render() {
    const { skills, name, year, iconHeader } = this.props;
    return (
      <div className="skills__container container grid">
        <div>
          <div className={classNames('skills__content', { [`skills__open`]: !this.state.isClose }, { [`skills__close`]: this.state.isClose })}>
            <div className="skills__header">
              <i className = {classNames(iconHeader,['skills__icon'])}></i>
              <div>
                <h1 className="skills__title">{name }</h1>
                <span className="skills__subtitle">about {year} years</span>
              </div>
              <i className = {classNames(icon.showDown,['skills__arrow'])} onClick = {()=>{this.setState({isClose:!this.state.isClose})}}></i>
            </div>
            <div className="skills__list-box">
              <div className="skills__list grid">
                {this.renderSkillBar(skills)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}