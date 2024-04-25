import react, {useState} from 'react';
import rock_paper_scissors from'../images/rock-paper-scissor.png'
import tic_tac_tow from '../images/tic-tac-toe.png'
import todo_app from '../images/todo_app.png'

function Projects() {
    const [content1] = useState({
      heading: "Projects",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    });
    const project_type = ["Game", "App", "Web"]
    const projects = [
      {
        class: "Game",
        heading: "Tic-Tac-Toe",
        link: "",
        text: "A simple tic-tac-toe game that you can play against the computer. It shows all the steps you took.",
        tools: ['ReactJs', 'CSS', 'Vanilla'],
        picture: tic_tac_tow,
      },
      {
        class: "App",
        heading: "To-Do App",
        link: "",
        text: "A To-Do App to list all your works and use as a reminder. You can edit the add, delete, and update the taks. .",
        tools: ['Django', 'ReactJs', 'SQL'],
        picture: todo_app,
      },
      {
        class: "Web",
        heading: "Rock Papers Scissor",
        link: "",
        text: "A Rock Papers Scissors game that you can play against teh computer or againts your friend. You can view the scorecards.",
        tools: ['TypeScript', 'Flutter', 'Material UI'],
        picture: rock_paper_scissors,
      },
    ];
    return (
      <div className="container__projects" id="projects">
        <div className="contents__projects">
          <h1>{content1.heading}</h1>
          <p>{content1.text}</p>
        </div>
        <div className="project_type">
          {project_type.map((type, typeindex)=>{
            return(
              <li key = {typeindex}>{type}</li>
            )
          })}
        </div>
        <div className="projects">
          {projects.map((project, index) => {
            return (
              <div className="project__box" key={index}>
                  <h2>{project.heading}</h2>
                  <div className = "tools">
                      {project.tools.map((tool, toolindex)=>{
                          return(
                          <li key = {toolindex}>{tool}</li>
                          )
                      })}
                  </div>
                  <img src={project.picture}/>
                  <a href={project.link}>Launch</a>
              </div>
            );
          })}
        </div>
        <div className="bar"></div>
      </div>
    );
  }
  
export default Projects;
  