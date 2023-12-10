import styles from "./style.module.scss";
import imagePredio from "../../../assets/predioIpanema.jpeg";
import projeto from "../../../assets/projeto.png";
import aguarde from "../../../assets/aguarde.jpg";
import { Link } from "react-router-dom";


export const SectionProjects = () => {
  return (
    <section className={styles.sectionProjects}>
      <h2 className="titleSectionProjects">Projetos</h2>
      <ul>
        <li>
          <Link>
            <img src={ imagePredio } alt="Prédio Jennifer Residence" style={{ opacity: 0.3 }}/>
            <p className="textCard">Todos Apês Vendidos!</p>
            <h4 className="textCard">Prédio Jennifer Residence</h4>
          </Link>
        </li>
        <li>
          <Link>
            <img src={ projeto } alt="" />
            <p className="textCard">Apartamentos no Projeto*</p>
            <h4 className="textCard">Prédio no Bairro Ipanema I</h4>
          </Link>
        </li>
        <li>
          <img src={ aguarde } alt="" />
          <p className="textCard">Lançamento!</p>
          <h4 className="textCard"></h4>
        </li>
        <li>
          <img src={aguarde} alt="" />
          <p className="textCard">Lançamento!</p>
          <h4 className="textCard"></h4>
        </li>
        <li>
          <img src={aguarde} alt="" />
          <p className="textCard">Lançamento!</p>
          <h4 className="textCard"></h4>
        </li>
      </ul>
      <p className="textCard2">*com apartamentos à venda!</p>
    </section>
    
  )}