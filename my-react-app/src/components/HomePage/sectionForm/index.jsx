import styles from "./style.module.scss";
import Check from "../../../assets/Check.svg";
import Construcao from "../../../assets/backgroundForm.png";


export const SectionForm = () => {
  return (
    <section className={styles.sectionForm}>
      <img src={Construcao} alt="" className="imgBackground"/>
      <form className={styles.formContact}>
        <h3 className="titleForm">Solicite um orçamento</h3>
        <p className="textSection">O controle total sobre os produtos permite-nos oferecer aos nossos clientes os melhores preços e serviços de qualidade.</p>
        <div>
          <input type="text" placeholder="Nome"/>
          <input type="text" placeholder="Email"/>
        </div>
        <div>
          <input type="phone" placeholder="Telefone"/>
          <select name="" id="">
            <option value="">Horario para contato</option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
          </select>
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder="Detalhes Adicionais"></textarea>
        <button className="textSection" type="submit">Enviar pedido</button>
      </form>
    </section>
  )}