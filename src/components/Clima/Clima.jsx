import { useEffect, useState } from "react";
import styles from "./Clima.module.css";

function Clima() {
  const [climates, setClimates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://projeto-final-m4-u5yq.onrender.com/climate")
      .then((response) => response.json())
      .then((data) => setClimates(data))
      .catch((error) => console.error("Erro ao buscar dados:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className={styles.main}>
      <h1>Dados sobre o Clima Mundial</h1>
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
            <p>Carregando dados climáticos...</p>
          </div>
        ) : climates.length > 0 ? (
          climates.map((item) => (
            <div key={item.id} className={styles.card}>
              <h2 className={styles.title}>{item.nome}</h2>
              <p className={styles.description}>{item.descricao}</p>
              <p className={styles.year}>Ano: {item.ano}</p>
              <p className={styles.impact}>Impacto: {item.impacto}</p>
            </div>
          ))
        ) : (
          <p>Nenhum dado encontrado.</p>
        )}
      </div>
    </main>
  );
}

export default Clima;
