import styles from "./style.module.scss";
import LogoPadrao from "../../assets/LogoPadrao.png";



export const HeaderBar = () => {
  return(
    <header className={styles.header}>
      <img src={ LogoPadrao} alt="#" />
      <nav>
        <h2 className="titleHeader">Pagina Inicial</h2>
        <h2 className="titleHeader">Sobre</h2>
        <h2 className="titleHeader">Contato</h2>
      </nav>
    </header>
  )
}