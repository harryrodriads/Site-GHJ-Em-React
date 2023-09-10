import styles from "./style.module.scss";
import LogoPadrao from "../../assets/LogoPadrao.png";
import { SectionForm } from "../HomePage/sectionForm";


export const HeaderBar = () => {
  return(
    <header className={styles.header}>
      <img src={ LogoPadrao} alt="#" />
      <nav>
        <h2 className="titleHeader"><a href={SectionForm}>Pagina Inicial</a></h2>
        <h2 className="titleHeader">Sobre</h2>
        <h2 className="titleHeader">Contato</h2>
      </nav>
    </header>
  )
  
}