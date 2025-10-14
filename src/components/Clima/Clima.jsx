import { useEffect, useState } from "react";
import styles from "./Clima.module.css";

function Clima() {
  const [climates, setClimates] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 👈 NOVO: Estado para controlar o carregamento
  const [error, setError] = useState(null);       // 👈 NOVO: Estado para erros

  useEffect(() => {
    fetch("https://projeto-final-m4-u5yq.onrender.com/climate")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Falha na resposta do servidor'); // Trata erros HTTP
        }
        return response.json();
      })
      .then((data) => {
        setClimates(data);
        setIsLoading(false); // 👈 ATUALIZAÇÃO: Carregamento concluído com sucesso
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
        setError("Não foi possível carregar os dados. Tente novamente."); // 👈 ATUALIZAÇÃO: Define a mensagem de erro
        setIsLoading(false); // 👈 ATUALIZAÇÃO: Carregamento concluído com falha
      });
  }, []);

  return (
    <main className={styles.main}>
      <h1>Dados sobre o clima Mundial</h1>
      <div className={styles.container}>
        {/* Lógica de renderização com base nos novos estados */}
        {isLoading ? (
          <p className={styles.loading}>Carregando dados climáticos...</p>
        ) : error ? (
          <p className={styles.error}>{error}</p> // 👈 Exibe erro se houver
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
          <p className={styles.loading}>Nenhum dado climático encontrado.</p> // 👈 Caso o array venha vazio (0 itens)
        )}
      </div>
    </main>
  );
}

export default Clima;