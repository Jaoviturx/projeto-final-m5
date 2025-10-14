import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>EcoVision 🌱</h1>
        <ul className={styles.navList}>
          <li><Link to="/" className={styles.link}>Início</Link></li>
          <li><Link to="/clima" className={styles.link}>Mudanças Climáticas</Link></li>
          <li><Link to="/desmatamento" className={styles.link}>Desmatamento</Link></li>
          <li><Link to="/conscientizacao" className={styles.link}>Conscientização</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
