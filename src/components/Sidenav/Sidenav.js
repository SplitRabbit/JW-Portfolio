import React from 'react';
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import TimelineIcon from '@material-ui/icons/Timeline'
import ProjectsIcon from '@material-ui/icons/Work'
import SkillsIcon from '@material-ui/icons/Code'
import "./Sidenav.css";

const SideNav = ({handlePageChange,navState,openNavClick,closeNavClick,handleEscKey}) => {
  
    let sideNavStyle = { width: navState ? "250px" : "0" };

    return (
      <>
        <span onClick={openNavClick} className="open-nav">
          <MenuIcon />
        </span>
        <div name="side-nav" className="side-nav" style={sideNavStyle}>
          <a href="#" onClick={closeNavClick} className="close-nav">
            &times;
          </a>
          <div
              id='home'
              className='sidenav-item link link--icon'
              aria-label='home'
              onClick={handlePageChange}>
              <HomeIcon/>  Home
          </div>
          <div
              id='timeline'
              className= 'sidenav-item link link--icon'
              aria-label='timeline'
              onClick={handlePageChange}>
              <TimelineIcon />  Timeline
          </div>
          <div 
              id='projects'
              className='sidenav-item link link--icon'
              aria-label='projects'
              onClick={handlePageChange}>
              <ProjectsIcon/>  Projects
          </div>
          <div 
              id='skills'
              className='sidenav-item link link--icon'
              aria-label='skills'
              onClick={handlePageChange}>
              <SkillsIcon/>  Skills
          </div>
        </div>
      </>
    )
  };

export default SideNav
