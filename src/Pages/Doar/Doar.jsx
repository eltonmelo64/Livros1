import React, { useState } from 'react';
import axios from 'axios'; // Importar axios
import styles from './Doar.module.scss'; 
import Frame from "../../assets/Frame.png"; 

const Doar = () => {
    const [formData, setFormData] = useState({
        titulo: '',
        categoria: '',
        autor: '',
        imagem_url: ''
    });

    const [message, setMessage] = useState(''); // Estado para armazenar a mensagem

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const enviarDados = async () => {
        const urlApi = "https://novo3.onrender.com/doar"; // URL da API
        try {
            // Enviar os dados via POST para a API
            const response = await axios.post(urlApi, formData);

            // Verificar se o status da resposta é 200 ou 201 (sucesso)
            console.log('Resposta da API:', response); // Log para depuração
            if (response && (response.status === 200 || response.status === 201)) {
                setMessage('Obrigado por sua doação!');
            } else {
                // Caso a resposta não tenha sido 200 ou 201, exibe mensagem de erro
                setMessage(`Erro ao processar a doação. Status: ${response.status}`);
            }
        } catch (error) {
            // Caso ocorra um erro durante a requisição
            console.error('Erro ao enviar os dados:', error);
            setMessage('Erro ao enviar os dados. Tente novamente!');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do Livro:', formData); // Log dos dados antes de enviar
        enviarDados(); // Envia os dados para a API
        setFormData({
            titulo: '',
            categoria: '',
            autor: '',
            imagem_url: ''
        });
    };

    return (
        <div className={styles.pageBody}>
            <p className={styles.formInstruction}>
                Por favor, preencha o formulário com suas informações e as informações do Livro
            </p>
            <div className={styles.formContainer}>
                <div>
                    <section className={styles.imageTitleContainer}>
                        <img src={Frame} alt="Frame" className={styles.imageFrame} />
                        <h1 className={styles.formTitle}>Informações do Livro</h1>
                    </section>
                    
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="titulo"
                            name="titulo"
                            className={styles.formInput}
                            value={formData.titulo}
                            onChange={handleChange}
                            placeholder="Título"
                            required
                        />

                        <input
                            type="text"
                            id="categoria"
                            name="categoria"
                            className={styles.formInput}
                            value={formData.categoria}
                            onChange={handleChange}
                            placeholder="Categoria"
                            required
                        />

                        <input
                            type="text"
                            id="autor"
                            name="autor"
                            className={styles.formInput}
                            value={formData.autor}
                            onChange={handleChange}
                            placeholder="Autor"
                            required
                        />

                        <input
                            type="text"
                            id="imagem_url"
                            name="imagem_url"
                            className={styles.formInput}
                            value={formData.imagem_url}
                            onChange={handleChange}
                            placeholder="Link da Imagem"
                        />

                        <button type="submit" className={styles.formButton}>Doar</button>
                    </form>

                    {/* Exibindo a mensagem abaixo do formulário */}
                    {message && <div className={styles.message}>{message}</div>}
                </div>
            </div>
        </div>
    );
};

export default Doar;
