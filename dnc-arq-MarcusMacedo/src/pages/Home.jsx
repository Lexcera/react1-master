import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import ProjectsList from "../components/projectsLists/projectsLists";

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <ProjectsList />
      </div>
      <Footer />
    </>
  );
}

export default Home;
