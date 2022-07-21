import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const Projects = () => {
//   if (!projects.length) return null

//   return (
//     <section id='projects' className='section projects'>
//       <h2 className='section__title'>Featured Projects</h2>

//       <div className='projects__grid'>
//         {projects.map((project) => (
//           <ProjectContainer key={uniqid()} project={project} />
//         ))}
//       </div>
//     </section>
//   )
// }

const Projects = ({ project }) => {
  let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: "linear"
  }
  return (
    <section id='projects' className='section projects'>
    <h2 className='section__title'>Featured Projects</h2>

    <Slider {...settings}>
        {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
          ))}
    </Slider>
  </section>

  )
}

export default Projects
