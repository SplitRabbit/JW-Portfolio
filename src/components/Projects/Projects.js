
import { projects } from '../../portfolio'
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Featured Projects</h2>
      <ProjectCarousel />
    </section>
  )
}

export default Projects
