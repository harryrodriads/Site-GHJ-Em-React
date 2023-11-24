import bannerworkers from "../../../assets/bannerworkers.png";
import Check from "../../../assets/Check.svg";
import styles from "./style.module.scss";
import NumberCounter from '../number/NumberCounter';
import NumberCounter1 from '../number/NumberCounter1';


export const Banner = () => {
  
  return (
    <section  className={styles.banner}>
      <figure>
        <img src={bannerworkers } alt="" />
      </figure>
      <div className={styles.divPrimary}>
        <h1 className="titlebanner">Construindo Sonhos,</h1>
        <h1 className="titlebanner">realizando <span>Vidas!</span> </h1>
        <h4 className="textbanner"><br></br>Oferecemos o melhor projeto arquitetônico, construção e serviços de manutenção para você.</h4>
      </div>
      <div className={styles.divSecundary}> 
        <div  className={styles.card}>
          <p className="numbers">+</p>
          <p  className="numbers"><NumberCounter targetNumber={25}/></p>
          <p className="titleHeader">Anos de Experiência</p>
        </div>         
        <div className={styles.card}>
          <p className="numbers">+</p>
          <p className="numbers"><NumberCounter1 targetNumber={100}/></p>
          <p className="titleHeader">Projetos Concluídos</p>
        </div> 
      </div>
      <div className={styles.divBox}>
          <div className={styles.contentCard}>
            <img src={Check} alt="Check" className="checkLogo" />
            <h3 className="textCardBox">Sistema de controle de qualidade, garantia de 100% de satisfação;</h3>
          </div>
          <div className={styles.contentCard}>
            <img src={Check} alt="Check" className="checkLogo" />
            <h3 className="textCardBox">Equipe altamente profissional, processos de teste precisos;</h3>
          </div>
          <div className={styles.contentCard}>
            <img src={Check} alt="Check" className="checkLogo" />
            <h3 className="textCardBox">Mão de obra incomparável, profissional e qualificada.</h3>
          </div>
      </div>
    </section>
  );
};
