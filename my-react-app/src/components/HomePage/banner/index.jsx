import bannerworkers from "../../../assets/bannerworkers.png";
import Check from "../../../assets/Check.svg";
import styles from "./style.module.scss";


export const Banner = () => {
  return (
    <section  className={styles.banner}>
      <figure>
        <img src={bannerworkers } alt="" />
      </figure>
      <div className={styles.divPrimary}>
        <h1 className="titlebanner">Nós preparamos</h1>
        <h1 className="titlebanner">para o <span>futuro!</span> </h1>
        <h4 className="textbanner">Oferecemos o melhor projeto arquitetônico, construção e serviços de manutenção predial para você.</h4>
      </div>
      <div className={styles.divSecundary}> 
        <div  className={styles.card}>
          <p  className="numbers">25+</p>
          <p className="titleHeader">Anos de Experiencia</p>
        </div>         
        <div className={styles.card}>
          <p className="numbers">100+</p>
          <p className="titleHeader">Projetos Concluidos</p>
        </div> 
      </div>
      <div className={styles.divBox}>
          <div className={styles.contentCard}>
            <img src={Check} alt="Check" className="checkLogo" />
            <h3 className="textCardBox">Sistema de controle de qualidade, garantia de 100% de satisfação</h3>
          </div>
          <div className={styles.contentCard}>
            <img src={Check} alt="Check" className="checkLogo" />
            <h3 className="textCardBox">Equipe altamente profissional, processos de teste precisos</h3>
          </div>
          <div className={styles.contentCard}>
            <img src={Check} alt="Check" className="checkLogo" />
            <h3 className="textCardBox">Mão de obra incomparável, profissional e qualificada</h3>
          </div>
      </div>
    </section>
  );
};
