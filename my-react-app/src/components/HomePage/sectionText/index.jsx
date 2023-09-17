import styles from "./style.module.scss";
import Check from "../../../assets/Check.svg";


export const SectionText = () => {
  return(
    <section className={styles.sectionText}>
      <h2 className="titlebanner">Líder em Edificação e Construção Civil</h2>
      <div  className={styles.divText}>
        <div className={styles.contentCard}>
            <img src={Check} alt="Check" className={styles.checkLogo} />
            <h3 className="textSectionCheck">Equipe Profissional</h3>
          </div>

          <div className={styles.contentCard}>
            <img src={Check} alt="Check" className={styles.checkLogo} />
            <h3 className="textSectionCheck">100% Satisfação</h3>
          </div>

          <div className={styles.contentCard}>
            <img src={Check} alt="Check" className={styles.checkLogo} />
            <h3 className="textSectionCheck">Teste preciso</h3>
          </div>

          <div className={styles.contentCard}>
            <img src={Check} alt="Check" className={styles.checkLogo} />
            <h3 className="textSectionCheck">Preços transparentes</h3>
          </div>
      </div>
    </section>
  )
}