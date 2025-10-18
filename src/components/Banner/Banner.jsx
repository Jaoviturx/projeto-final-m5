import { useState } from 'react';
import styles from './Banner.module.css';

function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ongs = [
    { nome: 'Missão Ambiental', email: 'missaoambiental.org@gmail.com' },
    { nome: 'Centro de Educação Ambiental Mandembo', email: 'mandembo.org@gmail.com' },
    { nome: 'CEMAIS - Centro de Estudo de Meio', email: 'sueli.cemais@gmail.com' },
    { nome: 'ONG Rio Paraná', email: 'contato@rioparana.ong.br' },
    { nome: 'Iniciativa Verde', email: 'contato@iniciativaverde.org.br' },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Projeto EcoInfo 🌱</h1>
          <p className={styles.subtitle}>
            Um projeto dedicado a conscientizar sobre as mudanças climáticas e o desmatamento,
            incentivando a preservação do meio ambiente e um futuro sustentável.
          </p>
          <button onClick={openModal} className={styles.button}>
            Saiba mais
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>ONGs Ambientais</h2>
            <ul>
              {ongs.map((ong, index) => (
                <li key={index}>
                  <strong>{ong.nome}</strong>: {ong.email}
                </li>
              ))}
            </ul>
            <button onClick={closeModal} className={styles.closeButton}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Banner;
