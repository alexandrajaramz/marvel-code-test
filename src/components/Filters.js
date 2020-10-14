import React from 'react';

const Filters = props => {
  const {searchCharacter, getCharacters} = props;
  return (
    <form className="header__form">
      <label htmlFor="form-name">
        <input 
          type="text" 
          name="form-name"
          className="form-name__input" 
          placeholder="Character Name" 
          onChange={searchCharacter}   
        />
      </label>
      <i className="fas fa-search" onClick={getCharacters}></i>
    </form>
  );
}

export default Filters;