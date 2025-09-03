import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import ProjectsList from "../components/projectsLists/projectsLists";
import { useContext } from "react";

// Context
import { AppContext } from "../components/contexts/AppContext";

function Projects() {
  const appContext = useContext(AppContext);
  return (
    <>
      <Header />
      <Banner
        title={appContext.languages[appContext.language].menu.projects}
        image="project.svg"
      />
      <div className="container">
        <ProjectsList />
      </div>
      <Footer />
    </>
  );
}

export default Projects;
