import styles from "./style.module.scss";
import LogoPadrao from "../../assets/LogoPadrao.png";
import LogoFacebook from "../../assets/Facebook.svg";
import LogoLinkedIn from "../../assets/LinkedIn.svg";
import LogoInstagram from "../../assets/Instagram.svg";


export const Footer = () => {
  return (
    <footer className={styles.footerContent}>
      <img src={ LogoPadrao} alt="" className={styles.imgLogo}/>
      <div className={styles.divFooter}>
        <div className={styles.divOne}>
          <h3 className="textCard">Sobre Nós</h3>
          <p className="textFooter">Temos a confiança necessária para lhe prestar o melhor serviço, com o apoio de RH Profissionais e Certificados que possuímos atualmente e os materiais de elevada qualidade que utilizamos e técnicas de trabalho estruturadas, seremos capazes de concretizar a conclusão atempada dos trabalhos.</p>
          <div className={styles.socialLogos}>
            <img src={LogoFacebook} alt="" />
            <img src={LogoInstagram} alt="" />
            <img src={LogoLinkedIn} alt="" />
          </div>
        </div>

        <div className={styles.divTwo}>
          <h3 className="textCard">Escritório</h3>
          <p className="textFooter">Rua Jovina dias Teixeira 115</p>
          <p className="textFooter">Ipanema</p>
          <p className="textFooter">Patos de Minas - MG</p>
        </div>

        <div className={styles.divThree}>
          <h3 className="textCard">Contato</h3>
          <p className="textFooter">Email: email@gmail.com</p>
          <p className="textFooter">Telefone: (34)99975-0992 </p>
        </div>
      </div>

      <h2 className="textCopyright">Copyright © 2023 CandyAP. All Rights Reserved</h2>
    </footer>

  )}