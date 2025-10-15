import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.logo}>EcoInfo 🌱</h2>

        <div className={styles.contacts}>
          <p><strong>Contato do grupo:</strong></p>
          <p>fernandestqbbia@gmail.com</p>
          <p>luisadocarmo0305@gmail.com</p>
          <p>marcileneaparecidademiranda5@gmail.com</p>
          <p>joaomiguel.fs2105@gmail.com</p>
          <p>jao553vitor@gmail.com</p>
          <p>vl7829765@gmail.com</p>
        </div>

        <p className={styles.phrase}>
          “Pequenas atitudes geram grandes mudanças 🌎”
        </p>

        <p className={styles.copy}>
          © 2025 EcoInfo
        </p>
      </div>
    </footer>
  );
}

export default Footer;
