import styles from "./style.module.scss";
import Check from "../../../assets/Check.svg";


export const SectionText = () => {
  return(
    <section className={styles.sectionText}>
      <h2 className="titlebanner">Líder em Edificação e Construção Civil</h2>
      <div  className={styles.divText}>
        <div className={styles.contentCard}>
            <img src={Check} alt="Check" className="checkLogo" />
            <h3 className="textCard">Equipe Profissional</h3>
          </div>

          <div className={styles.contentCard}>
            <img src={Check} alt="Check" className="checkLogo" />
            <h3 className="textCard">100% Satisfação</h3>
          </div>

          <div className={styles.contentCard}>
            <img src={Check} alt="Check" className="checkLogo" />
            <h3 className="textCard">Teste preciso</h3>
          </div>

          <div className={styles.contentCard}>
            <img src={Check} alt="Check" className="checkLogo" />
            <h3 className="textCard">Preços transparentes</h3>
          </div>
      </div>
    </section>
  )
}