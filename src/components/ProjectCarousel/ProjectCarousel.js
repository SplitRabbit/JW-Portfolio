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
            <div className="card-wrapper">
                <div className="card">
                <div className="card-wrapper">
                        <div className='project card'>

                            <h3>{project.name}</h3>

                            <p className='project__description'>{project.description}</p>
                            {project.stack && (
                            <ul className='project__stack'>
                                {project.stack.map((item) => (
                                <li key={uniqid()} className='project__stack-item'>
                                    {item}
                                </li>
                                ))}
                            </ul>
                            )}

                            {project.sourceCode && (
                            <a
                                href={project.sourceCode}
                                aria-label='source code'
                                className='link link--icon'
                            >
                                <GitHubIcon />
                            </a>
                            )}

                            {project.livePreview && (
                            <a
                                href={project.livePreview}
                                aria-label='live preview'
                                className='link link--icon'
                            >
                                <LaunchIcon />
                            </a>
                            )}
                        </div>
                </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    Potato 2
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    Potato 3
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    Potato 4
                </div>
            </div>
        </Slider>
    )
}

export default ProjectCarousel



