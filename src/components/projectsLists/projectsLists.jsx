import { useContext, useState, useEffect } from "react";
import "./projectsList.css";

// assets
import likedFilled from "../../assets/likeFilled.svg";
import LikeOutLine from "../../assets/like.svg";

// components
import Button from "../button/Button";

// context
import { AppContext } from "../contexts/AppContext";

// Utils
import { getApiData } from "../../services/apiServices";

function projectsList(props) {
  const [projects, setProjects] = useState([]);
  const [favProjects, setFavProject] = useState([]);
  const appContext = useContext(AppContext);
  const handleSavedFavProjects = (id) => {
    setFavProject((prevFavProjects) => {
      if (prevFavProjects.includes(id)) {
        const filterArray = prevFavProjects.filter(
          (projectId) => projectId !== id
        );
        sessionStorage.setItem("favProjects", JSON.stringify(filterArray));
        return prevFavProjects.filter((projectId) => projectId !== id);
      } else {
        sessionStorage.setItem(
          "favProjects",
          JSON.stringify([...prevFavProjects, id])
        );
        return [...prevFavProjects, id];
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getApiData("projects");
        setProjects(projectsResponse);
      } catch {
        setProjects([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const savedFavProjects = JSON.parse(sessionStorage.getItem("favProjects"));
    if (savedFavProjects) {
      setFavProject(savedFavProjects);
    }
  }, []);

  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>{appContext.languages[appContext.language].projects.title}</h2>
        <p>{appContext.languages[appContext.language].projects.subtitle}</p>
      </div>
      <div className="projects-grid">
        {projects
          ? projects.map((project) => (
              <div
                className="project-card d-flex jc-center al-center fd-column"
                key={project.id}
              >
                <div
                  className="thumb tertiary-background"
                  style={{ backgroundImage: `url(${project.thumb})` }}
                ></div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <Button
                  buttonStyle="unstyled"
                  onClick={() => handleSavedFavProjects(project.id)}
                >
                  <img
                    src={
                      favProjects.includes(project.id)
                        ? likedFilled
                        : LikeOutLine
                    }
                    height="20px"
                  />
                </Button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default projectsList;
