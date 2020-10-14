import React from 'react';
import '../styles/Modal.scss';

const Modal = ({ handleClose, show, character}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <ul className="modal-main">
        <li>{character.name}</li>
        <li>{character.id}</li>
        <li>{character.description}</li>

        <li>Comics which feature this character: {character.comics.available}</li>
        <li>Series in which this character appears: {character.series.available}</li>
        <li>Stories in which this character appears: {character.stories.available}</li>       
      </ul>
      <button onClick={handleClose}>close</button>
    </div>
  );
};

export default Modal;