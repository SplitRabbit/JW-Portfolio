import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const ProjectCarousel = (project) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
      
    return (
        <Slider {...settings}>
                {projects.map((project) => (
                    <ProjectContainer key={uniqid()} project={project} />
                ))}
        </Slider>
    )
}

export default ProjectCarousel



