import React from 'react';
import styles from './Main.module.scss';  
import Capa from "../../assets/Capa.png";
import Motivo from "../../assets/Motivo.png";
import Motivo2 from "../../assets/Motivo2.png";
import Motivo3 from "../../assets/Motivo3.png";
import Motivo4 from "../../assets/Motivo4.png";

function Main() {
  return (
    <main className={styles['main-content']}>  
      <section className={styles.banner}>  
        <img src={Capa} alt="" />
        <h2 className={styles.titulo}>  
          <span>VENHA FAZER PARTE</span> 
          <span>DA MAIOR REDE DE</span>
          <span>DOAÇÃO</span>
          {/* VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO */}
        </h2>
      </section>

      <section className={styles.motivos}>
        <h3>Por que devo doar?</h3>
        <div className={styles['motivos-container']}>  
          <div className={styles.motivo}>  
            <img src={Motivo} alt="" />
            <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </div>
          <div className={styles.motivo}>  
            <img src={Motivo2} alt="" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </div>
          <div className={styles.motivo}>  
            <img src={Motivo3} alt="" />
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </div>
          <div className={styles.motivo}>  
            <img src={Motivo4} alt="" />
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
