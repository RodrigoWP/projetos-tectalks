'use strict'
import React, { PropTypes } from 'react'

/*Doumb component*/
const Search = ({ isDisable, handleSearch }) => (
    <div className="search">
        <input
            type="search"
            placeholder="Digite o nome do usuário"
            onKeyUp={handleSearch}
            disabled={isDisable}
        />
    </div>
)

Search.propTypes = {
    handleSearch : PropTypes.func.isRequired,
    isDisabled : PropTypes.bool.isRequired
}

export default Search
