import { useEffect, useState } from "react";
import styles from "./Desmatamento.module.css";

function Desmatamento() {
  // Renomeado 'climates' para 'deforestationData' para refletir o tema
  const [deforestationData, setDeforestationData] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
    fetch("https://projeto-final-m4-u5yq.onrender.com/deforestation")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Falha na resposta do servidor'); 
        }
        return response.json();
      })
      .then((data) => {
        // Atualiza o estado renomeado
        setDeforestationData(data); 
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
        setError("Não foi possível carregar os dados. Tente novamente."); 
        setIsLoading(false); 
      });
  }, []);

  return (
    <main className={styles.main}>
      {/* Título corrigido para refletir o tema */}
      <h1>Dados sobre Desmatamento Global</h1>
      <div className={styles.container}>
        {isLoading ? (
          // Mensagem de carregamento corrigida
          <p className={styles.loading}>Carregando dados de desmatamento...</p>
        ) : error ? (
          <p className={styles.error}>{error}</p> 
        ) : deforestationData.length > 0 ? (
          // Usando o novo nome do estado
          deforestationData.map((item) => (
            <div key={item.id} className={styles.card}>
              <h2 className={styles.title}>{item.nome}</h2>
              {/* Campos ajustados para o JSON de desmatamento */}
              <p className={styles.description}>
                Área Desmatada: {item.areaDesmatada}
              </p>
              <p className={styles.year}>Ano: {item.ano}</p>
              <p className={styles.impact}>Causa Principal: {item.causa}</p>
            </div>
          ))
        ) : (
          // Mensagem de dados vazios corrigida
          <p className={styles.loading}>Nenhum dado de desmatamento encontrado.</p> 
        )}
      </div>
    </main>
  );
}

export default Desmatamento;