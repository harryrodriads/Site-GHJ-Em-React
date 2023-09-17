import styles from "./style.module.scss";
import imagePredio from "../../../assets/predioIpanema.jpeg";
import predio from "../../../assets/predio2.jpeg";
import projeto from "../../../assets/projeto.png";
import aguarde from "../../../assets/aguarde.jpg";
import { Link } from "react-router-dom";


export const SectionProjects = () => {
  return (
    <section className={styles.sectionProjects}>
      <h2 className="titleSectionProjects">Projetos</h2>
      <ul>
        <li>
          <Link to="/JenniferResidence">
            <img src={imagePredio} alt="" />
            <p className="textCard">Jennifer Residence*</p>
            <h4 className="textCard">Prédio no Bairro Ipanema</h4>
          </Link>
        </li>
        <li>
          <img src={ projeto } alt="" />
          <p className="textCard">Apartamentos no Projeto*</p>
          <h4 className="textCard">Prédio no Bairro Ipanema</h4>
        </li>
        <li>
          <img src={ aguarde } alt="" />
          <p className="textCard">Lançamento</p>
          <h4 className="textCard"></h4>
        </li>
        <li>
          <img src={aguarde} alt="" />
          <p className="textCard">Lançamento</p>
          <h4 className="textCard"></h4>
        </li>
        <li>
          <img src={aguarde} alt="" />
          <p className="textCard">Lançamento</p>
          <h4 className="textCard"></h4>
        </li>
      </ul>
      <p className="textCard2">*com apartamentos à venda!</p>
    </section>
    
  )}