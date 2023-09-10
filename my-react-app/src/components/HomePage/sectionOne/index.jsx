import workers from "../../../assets/workers2.png";
import styles from "./style.module.scss";


export const Section = () => {
  return (
    <section className={styles.sectionSobre}>
      <figure>
        <img src={workers} alt="" />
      </figure>
      <div className={styles.divSobre}>
        <h2 className="titlebanner"><span>25 anos</span> </h2>
        <h2 className="titlebanner">de experiência!</h2>
        <p className="textSection">Contamos com uma equipe de profissionais experientes que atuam no setor há mais de 25 anos. Nossos empreiteiros possuem uma riqueza de conhecimentos e habilidades que adquiriram ao longo dos anos, tornando-os especialistas em suas áreas.</p>
        <p className="textSection">Com 25 anos de experiência, nossos empreiteiros têm um profundo conhecimento dos padrões e regulamentações do setor. Garantimos que todos os nossos projetos cumpram os mais recentes códigos de segurança e construção, e que o produto final atenda ou supere as expectativas dos nossos clientes.</p>
        <h3 className="assinatura">Gilson dos Reis Rodrigues</h3>
        <h3 className="textAssinatura">Gilson dos Reis Rodrigues - Fundador</h3>
      </div>
    </section>
  )}