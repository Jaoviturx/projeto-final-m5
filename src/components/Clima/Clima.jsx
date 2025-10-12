import { useEffect, useState } from "react";
import styles from "./Clima.module.css";

function Clima() {
  const [climates, setClimates] = useState([]);

  useEffect(() => {
    fetch("https://projeto-final-m4-u5yq.onrender.com/climate")
      .then((response) => response.json())
      .then((data) => setClimates(data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  return (
    <main className={styles.main}>
      <h1>Dados sobre o clima Mundial</h1>
      <div className={styles.container}>
      {climates.length > 0 ? (
        climates.map((item) => (
          <div key={item.id} className={styles.card}>
            <h2 className={styles.title}>{item.nome}</h2>
            <p className={styles.description}>{item.descricao}</p>
            <p className={styles.year}>Ano: {item.ano}</p>
            <p className={styles.impact}>Impacto: {item.impacto}</p>
          </div>
        ))
      ) : (
        <p className={styles.loading}>Carregando dados climáticos...</p>
      )}
    </div>
    </main>
    
  );
}

export default Clima;
