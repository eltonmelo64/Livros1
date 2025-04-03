import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importar axios
import styles from './Doados.module.scss';
import Livro from "../../assets/livro 1.png"; // Capa do livro (exemplo caso não tenha imagem)

const Doados = () => {
    // Estado para armazenar os livros
    const [livros, setLivros] = useState([]);

    // Função assíncrona para buscar os livros na API
    const getLivros = async () => {
        try {
            const response = await axios.get("https://novo3.onrender.com/livros");
            // Adiciona o livro de exemplo apenas se ele ainda não estiver na lista
            const livrosComExemplo = [
                {
                    id: 1,
                    titulo: 'O Protagonista',
                    autor: 'Susanne Andrade',
                    categoria: 'Ficção',
                    imagem_url: Livro // Usando a imagem do livro de exemplo
                },
                ...response.data
            ];
            setLivros(livrosComExemplo);
        } catch (error) {
            console.error("Erro ao buscar livros:", error);
        }
    };

    // Função para excluir um livro
    const deleteLivro = async (livroId) => {
        try {
            // Fazendo a requisição de exclusão para a API
            await axios.delete(`https://novo3.onrender.com/livros/${livroId}`);
            // Atualiza a lista de livros após a exclusão
            setLivros(livros.filter(livro => livro.id !== livroId));
        } catch (error) {
            console.error("Erro ao excluir o livro:", error);
        }
    };

    useEffect(() => {
        getLivros(); // Chama a função para buscar livros quando o componente é montado
    }, []);

    return (
        <div className={styles.doadosContainer}>
            <h1 className={styles.doadosContainer1}>Livros Doados</h1>
            <div className={styles.livrosGrid}>
                {livros.length > 0 ? (
                    livros.map((livro) => (
                        <div key={livro.id} className={styles.livroCard}>
                            <img 
                                src={livro.imagem_url || Livro} // Usa imagem_url da API ou o livro de exemplo
                                alt={`Capa de ${livro.titulo}`} 
                                className={styles.livroImage}
                            />
                            <h3>{livro.titulo}</h3>
                            <p>{livro.autor}</p>
                            <span>{livro.categoria}</span>
                            {/* Botão para excluir o livro */}
                            <button 
                                className={styles.deleteButton} 
                                onClick={() => deleteLivro(livro.id)}
                            >
                                Excluir
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Não há livros para exibir no momento.</p>
                )}
            </div>
        </div>
    );
};

export default Doados;
