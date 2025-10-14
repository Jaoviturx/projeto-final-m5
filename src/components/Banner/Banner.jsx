import styles from "./Banner.module.css";

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Projeto EcoInfo 🌱</h1>
          <p className={styles.subtitle}>
            Um projeto dedicado a conscientizar sobre as mudanças climáticas e o desmatamento,
            incentivando a preservação do meio ambiente e um futuro sustentável.
          </p>
          <a href="#clima" className={styles.button}>
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;