import React from 'react';
import '../styles/Modal.scss';

const Modal = ({ handleClose, show, character}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <ul className="modal__list">
        <li><span>Name:</span> {character.name}</li>
        <li><span>ID:</span> {character.id}</li>
        <li><span>Comics which feature this character:</span> {character.comics.available}</li>
        <li><span>Series in which this character appears:</span> {character.series.available}</li>
        <li><span>Stories in which this character appears:</span> {character.stories.available}</li>       
        <li><button className="modal__list-btn" onClick={handleClose}>Close</button></li>
      </ul>
    </div>
  );
};

export default Modal;