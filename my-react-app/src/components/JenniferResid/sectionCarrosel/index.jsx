import { Carousel } from "./carroselImg"
import styles from "./style.module.scss";


export const SectionCarrosel = () => {
  return (
    <section  className={styles.sectionCarrosel}>
      <div className={styles.divContainer}>
        <h2>Apartamento JENNIFER RESIDENCE!!</h2>
        <div className={styles.divDescription}>
          <div className={styles.divPrimary}>
            <p>Apartamento no Bairro Ipanema</p>
            <p>IPTU: R$ 0,00</p>
            <p>Consomínio: R$ 0,00</p>
          </div>
          <div className={styles.divSecundary}>
            <h3>R$ 250.000,00</h3>
            <p>Venda</p>
          </div>
        </div>
      </div>
      <div className={styles.divCarousel}>
        <Carousel/>
      </div>
    </section>
  )
}