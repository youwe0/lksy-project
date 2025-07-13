
import '../css/Project.css'
const Projects = () => {
  return <>
  
   <section id="projects" className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      <div className="project-card">
        <h3>Weather App</h3>
        <p>
          A simple weather forecast application that displays current weather
          using static data.
        </p>
      </div>
      <div className="project-card">
        <h3>Todo List</h3>
        <p>
          A basic task manager app to add and track daily tasks. Built using
          React and local state.
        </p>
      </div>
    </div>
  </section>
  </>;
};

export default Projects;
