import styles from "./Menu.module.css";

function Menu() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>EcoVision 🌱</h1>
        <ul className={styles.navList}>
          <li>Início</li>
          <li>Mudanças Climáticas</li>
          <li>Desmatamento</li>
          <li>Conscientização</li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
