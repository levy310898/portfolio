import React, { Component } from 'react'
import './navigator.css';
import { icon } from '../../constant/data';
import { Link } from 'react-scroll';

var classNames = require('classnames');

export default class Navigator extends Component {
    state = {
        isShowMenu: false,
        isScrollDown: false,
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if (window.scrollY >= 120) {
            this.setState({ isScrollDown: true });
        } else {
            this.setState({ isScrollDown: false });
        }
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleDisplayMenu = ()=>{
        this.setState({isShowMenu:!this.state.isShowMenu});
    }

    renderMenuItem = (name,title,href)=> <li className = "nav__item">
        {/* <a href={`#${href}`} className = "nav__link" onClick = {this.handleDisplayMenu}><i className={classNames(icon[name],'nav__icon')}></i> {title}</a> */}

        <Link activeClass="nav__active" className="nav__link" to={href} spy={true} offset={-30} smooth={true} duration={300} delay = {0}><i className={classNames(icon[name], 'nav__icon')}></i>{title }</Link>
    </li>
    render() {
        return (
            <header className = {classNames('header',{['header--scroll']:this.state.isScrollDown})} id = "header">
                <nav className = "nav container">
                    <a href = "#top" className = "nav__logo">LeVy</a>

                    <div className={classNames('nav__menu',{'show-menu':this.state.isShowMenu})}>
                        <ul className = "nav__list grid">

                            {this.renderMenuItem('home','home','home')}
                            {this.renderMenuItem('about','about','about')}
                            {this.renderMenuItem('skills','skills','skills')}
                            {this.renderMenuItem('portfolio','portfolio','portfolio')}
                            {this.renderMenuItem('contact','contact me','contact')}
                        </ul>
                        <i class="fas fa-times nav__close" onClick = {this.handleDisplayMenu}></i>
                    </div>

                    <div className="nav__btns">
                        <i className={classNames(icon.moon, 'change-theme')} />
                        <div className="nav__toggle" onClick = {this.handleDisplayMenu}>
                        <i class="fas fa-bars"></i>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
