import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/CryptoCurrency.png';
import freshBurger from '../../assets/Weather2.png';
import hipsster from '../../assets/background.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Vedanshi19/Cryptocurrency-Website"
          h3="CryptoCurrency"
          p="Cryptocurrency Price"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Vedanshi19/Weather-App"
          h3="Weather App"
          p="Weather conditions"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Vedanshi19/bgChanger"
          h3="BgChanger"
          p="Change color theme"
        />
      </div>
    </section>
  );
}

export default Projects;