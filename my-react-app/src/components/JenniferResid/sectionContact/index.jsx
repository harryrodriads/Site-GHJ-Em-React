import styles from './style.module.scss';
import phone2 from "../../../assets/Ap201/phone2.svg"
import navigation from "../../../assets/Ap201/navigation.svg"


export const SectionContact = () => {
  return (
    <section  className={styles.sectionContact}>
      <div  className={styles.divContainer}>
        <h2>Ligue e marque uma visita!</h2>

        <div className={styles.divContact}>

          <div className={styles.cardsContact}>
            <img src={navigation} alt="" />
            <div>
              <h4>Endereço</h4>
              <p>Rua Dona Lilia - 20 - Ipanema </p>
            </div>
          </div>

          <div className={styles.cardsContact}>
            <img src={phone2} alt="" />
            <div>
              <h4>Telefone</h4>
              <p>(34)99975-0992</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}