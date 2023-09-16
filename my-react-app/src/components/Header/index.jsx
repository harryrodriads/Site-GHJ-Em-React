import styles from "./style.module.scss";
import LogoPadrao from "../../assets/LogoPadrao.png";
import { Link } from "react-router-dom";


export const HeaderBar = () => {
  return(
    <header id="header" className={styles.header}>
      <a href="#header"><img src={ LogoPadrao} alt="#" /></a>
      <nav>
      <Link to="/">
        <h2 className="titleHeader">Pagina Inicial</h2>

      </Link>
        <h2 className="titleHeader"><a href="#footerContent">Sobre</a></h2>
        <h2 className="titleHeader"><a href="#sectionForm">Contato</a></h2>
      </nav>
    </header>
  )
}