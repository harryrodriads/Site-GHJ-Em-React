import styles from "./style.module.scss";
import LogoPadrao from "../../assets/LogoPadrao.png";
import LogoFacebook from "../../assets/Facebook.svg";
import Email from "../../assets/email.svg";
import LogoInstagram from "../../assets/Instagram.svg";
import Phone from "../../assets/phone.svg";
import ScrollButton from "./botao";
 



export const Footer = () => {
  return (
    <footer id="footerContent" className={styles.footerContent}>
      <img src={ LogoPadrao} alt="" className={styles.imgLogo}/>
      <div className={styles.divFooter}>
        <div className={styles.divOne}>
          <h3 className="textCard1">Sobre Nós</h3>
          <p className="textFooter">Temos a confiança necessária para lhe prestar o melhor serviço, com o apoio de RH Profissionais e Certificados que possuímos atualmente e os materiais de elevada qualidade que utilizamos e técnicas de trabalho estruturadas, seremos capazes de concretizar a conclusão atempada dos trabalhos.</p>
          <p className="textFooter">CNPJ: 49.435.321/0001-08</p>
          <div className={styles.socialLogos}>
            <a href="https://www.instagram.com/empreendimentosghj/?hl=pt-br" target="blank_"><img src={LogoInstagram} alt="" className={styles.imgSocial} /></a>
            <a href="https://www.facebook.com/profile.php?id=61550980054967" target="blank_"><img src={LogoFacebook} alt="" className={styles.imgSocial}/></a>
            <a href="mailto:empreendimentosghj@gmail.com" target="blank_"><img src={Email} alt="" className={styles.imgSocial} /></a>
            <a href="https://wa.me/5534999750992/?" target="blank_"><img src={Phone} alt="" className={styles.imgSocial} /></a>
          </div>
        </div>

        <div className={styles.divTwo}>
          <h3 className="textCard1">Escritório</h3>
          <p className="textFooter">Rua Jovina dias Teixeira - 115</p>
          <p className="textFooter">Ipanema</p>
          <p className="textFooter">Patos de Minas - MG</p>
        </div>

        <div className={styles.divThree}>
          <h3 className="textCard1">Contato</h3>
          <p className="textFooter">empreendimentosghj@gmail.com</p>
          <p className="textFooter">(34) 99975-0992 </p>
        </div>
      </div>
      <ScrollButton />
      <h2 className="textCopyright">Copyright © 2023 CandyAP. All Rights Reserved</h2>
    </footer>
  )}