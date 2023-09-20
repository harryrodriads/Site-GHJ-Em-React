import styles from "./style.module.scss";
import bed from "../../../assets/Ap201/bed.svg"
import shower from "../../../assets/Ap201/shower.svg"
import grid from "../../../assets/Ap201/grid.svg"
import layer from "../../../assets/Ap201/layer.svg"
import car from "../../../assets/Ap201/car.svg"
import suite from "../../../assets/Ap201/suite.svg"



export const SectionDescription = () => {
  return (
    <section className={styles.sectionDescription}>
      <div className={styles.divContainer}>
        <h2>Descrição</h2>
        <h3>APARTAMENTO PRÓXIMO AO POSTO DE SAÚDE:</h3>
        <div>
          <p>Tamanho: 81 m²</p>
          <p>Área externa: 4 m²</p>
        </div>
        <div>
          <p>2º Andar</p>
          <p>Apenas 5 moradores</p>
          <p>Água e energia individual</p>
        </div>
        <div>
          <p>3 Quartos, sendo 1 Suíte com Closet</p>
          <p>2 Salas, e Cozinha com Lavanderia</p>
          <p>1 Banheiro Social</p>
          <p>2º Andar (nº 201)</p>
          <p>Garagem coberta</p>
          <p>Aceita-se Financiamento e pronto para morar!</p>
        </div>
        <h4>ÚLTIMAS UNIDADES DO JENNIFER RESIDENCE!!</h4>
        <h4>Valor: R$ 250.000,00</h4>

        <div  className={styles.divSpecifications}>
          <h2>Especificações</h2>
          <div   className={styles.containerIcons}>
            <div  className={styles.cardsIcons}>
              <img src={bed} alt="" />
              <h4>3 Quartos</h4>
            </div>
            <div className={styles.cardsIcons}>
              <img src={shower} alt="" />
              <h4>1 Banheiro</h4>
            </div>
            <div className={styles.cardsIcons}>
              <img src={suite} alt="" />
              <h4>1 Suíte</h4>
            </div>
            <div className={styles.cardsIcons}>
              <img src={layer} alt="" />
              <h4>2 Andar</h4>
            </div>
            <div className={styles.cardsIcons}>
              <img src={grid} alt="" />
              <h4>81 m²</h4>
            </div>
            <div className={styles.cardsIcons}>
              <img src={car} alt="" />
              <h4>Garagem Coberta</h4>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}