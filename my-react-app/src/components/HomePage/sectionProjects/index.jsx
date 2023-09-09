import styles from "./style.module.scss";
import imagePredio from "../../../assets/predioIpanema.jpeg";


export const SectionProjects = () => {
  return (
    <section className={styles.sectionProjects}>
      <h2 className="titleSectionProjects">Projetos em destaque</h2>
      <ul>
        <li>
          <img src={imagePredio} alt="" />
          <p className="textCard">Predio Ipanema</p>
        </li>
        <li>
          <img src="#" alt="" />
          <p className="textCard">Projeto</p>
        </li>
        <li>
          <img src="#" alt="" />
          <p className="textCard">Projeto</p>
        </li>
        <li>
          <img src="#" alt="" />
          <p className="textCard">Projeto</p>
        </li>
        <li>
          <img src="#" alt="" />
          <p className="textCard">Projeto</p>
        </li>
        <li>
          <img src="#" alt="" />
          <p className="textCard">Projeto</p>
        </li>
        <li>
          <img src="#" alt="" />
          <p className="textCard">Projeto</p>
        </li>
      </ul>
    </section>
    
    
  
  )}