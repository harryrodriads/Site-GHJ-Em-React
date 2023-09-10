import styles from "./style.module.scss";
import LogoPadrao from "../../assets/LogoPadrao.png";


export const HeaderBar = () => {
  return(
    <header id="header" className={styles.header}>
      <a href="#header"><img src={ LogoPadrao} alt="#" /></a>
      <nav>
        <h2 className="titleHeader"><a href="#header">Pagina Inicial</a></h2>
        <h2 className="titleHeader"><a href="#footerContent">Sobre</a></h2>
        <h2 className="titleHeader"><a href="#sectionForm">Contato</a></h2>
      </nav>
    </header>
  )
}