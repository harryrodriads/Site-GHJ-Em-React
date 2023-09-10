import styles from "./style.module.scss";
import Construcao from "../../../assets/backgroundForm.png";


export const SectionForm = () => {
  return (
    <section className={styles.sectionForm}>
      <img src={Construcao} alt="" className="imgBackground"/>
      <form className={styles.formContact} action="https://formspree.io/f/mwkdbjyk"
  method="POST">
        <h3 className="titleForm">Solicite um orçamento</h3>
        <p className="textSection">O controle total sobre os produtos permite-nos oferecer aos nossos clientes os melhores preços e serviços de qualidade.</p>
        <div>
          <input type="text" placeholder="Nome" name="Nome"/>
          <input type="text" placeholder="E-mail" name="Email"/>
        </div>
        <div>
          <input type="phone" placeholder="Telefone" name="Telefone"/>
          <select name="Contatar pela" id="">
            <option value="">Horário para contato</option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
          </select>
        </div>
        <textarea name="Mensagem" id="" cols="30" rows="10" placeholder="Detalhes Adicionais"></textarea>
        <button className="textSection" type="submit">Enviar pedido</button>
      </form>
    </section>
  )}

