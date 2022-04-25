import NavBar from "./NavBar";
import { Link } from "react-router-dom"

export default function Home() {
    return (
      <> 
        <NavBar />
            <Introduction />
            <Projects />
      </>
    )
  }

  function Introduction() {
    return (
      <section className="introduction">
        <img src="assets/images/lucian.png" alt="lucian" />
        <article>
          <h4>Lucian</h4>
          <p>Frontend Development student at KEA</p>
          <h3>
            Hey! I am currently looking for an internship and would love to be
            part of your team. Please take a look at my projects and contact me if
            you want to find out more.
          </h3>
        </article>
      </section>
    );
  }
  
  function Projects() {

const projects = [
    {
        id: "project1",
        path: "/project1",
        imgPath: "assets/images/carbontracker/carbon-tracker.svg",
        title: "Carbon Tracker",
        description: "Calculate Your Website's CO2 emissions"
    },
    {
        id: "project2",
        path: "/project2",
        imgPath: "assets/images/akva/akva-jewellery.svg",
        title: "AKVA Jewellery",
        description: "Website and SoMe strategy"
    },
    {
        id: "project3",
        path: "/project3",
        imgPath: "assets/images/silfen/silfen-bags.svg",
        title: "SILFEN Bags",
        description: "Website and SoMe strategy"
    },
    {
        id: "project4",
        path: "/project4",
        imgPath: "assets/images/joe/joe.svg",
        title: "Student Joe",
        description: "Interactive Game"
    }
]

    return (
      <>
        <h3 className="title">Projects</h3>
        <div id="projects">
            {projects.map(project => {
                return <ProjectTile id={project.id} path={project.path} imgPath={project.imgPath} title={project.title} description={project.description}/>
            })}
        </div>
      </>
    );
  }

  function ProjectTile(props) {
    return (
      <article id={props.id} className="project">
        <div className="project-preview">
          <Link to={props.path}>
            <img src={props.imgPath} alt={props.title+" website"} />
          </Link>
        </div>
        <div className="project-info">
          <Link to={props.path}>
            <h4>{props.title}</h4>
          </Link>
          <p>{props.description}</p>
        </div>
      </article>
    );
  }