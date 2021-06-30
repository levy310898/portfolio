import React, { Component } from 'react';
import SkillBox from '../../components/skillBox/index';
import { skills, icon } from '../../constant/data';
import './skillPage.css';
class index extends Component {
  render() {
    return (
      <div className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle"> My Skills</span>

        <SkillBox skills={skills.frontend} name='frontend developer' year={1} iconHeader ={icon.code} />
      </div>
    );
  }
}

export default index;