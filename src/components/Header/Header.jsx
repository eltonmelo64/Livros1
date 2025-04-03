import React from 'react';
import styles from './Header.module.scss';  
import Logo from "../../assets/Logo1.png";
import Pesquisa from "../../assets/pesquisa.png";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <section className={styles.section}>
                <img src={Logo} alt="" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/doados">Livros Doados</Link></li>
                    <li><Link to="/doar">Quero Doar</Link></li>
                </ul>
            </nav>
            <div className={styles.div}>
                <input type="text" placeholder="O que você procura?" />
                <img src={Pesquisa} alt="Ícone de Pesquisa" />
            </div>
        </header>
    );
}

export default Header;
