import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { FaRegBell } from "react-icons/fa";
// Importando o ícone de pesquisa
import './SearchBar.css'; // Estilo para a barra de pesquisa

function SearchBar() {
    return (
        <section className='SearchSection'>
            <div className="search-container">
                <input type="text" placeholder="Pesquisar..." className='PesquisarInput'/>
                <AiOutlineSearch className="search-icon" />
            </div>

            <i className='bell-Icon'><FaRegBell /></i>
        </section>
    );
}

export default SearchBar;
