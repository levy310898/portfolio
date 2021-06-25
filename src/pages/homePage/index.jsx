import React from 'react';
import {personalLink,icon} from '../../constant/data.js';

export default function index() {
  return (
    <div className="section home" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            {icon && icon.map((item,index)=><a key = {index} target = "_blank" href = {personalLink[item.name]} className = "home__social__icon">
              <i className = {item.icon}></i>
            </a>)}
          </div>
        </div>
      </div>
    </div>
  )
}

