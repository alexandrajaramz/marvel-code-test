import React from 'react';
import Modal from './Modal';
import '../styles/CharacterList.scss';

class CharacterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      show: false,
      selectedCharacter: null
    };

    this.openModal = this.openModal.bind(this);
  } 
  
  openModal = (character) => {
    this.setState({ 
      show: true,
      selectedCharacter: character 
    }); 
  }

  hideModal = () => {
    this.setState({ 
      show: false,
      selectedCharacter: null
    });
  };

  render () {
    const {characters, loading}=this.props;

    if (loading) {
      return (
        <div className="main__loading">
          <p>Search a character</p>
        </div>
      );
    } 

    return (
      <React.Fragment>
        <ul className="main__list">
          {characters.map((character, i) => {
            return (
              <li className="list__card"key={i}>
                <div className="card__wrapper">
                  <img className="card__img" src={`${character.thumbnail.path}/landscape_xlarge.jpg`} alt={`Official art for ${character.name}`}/>
                  <p className="card__name">{character.name}</p>
                  <p className="card__description">{character.description}</p>
                  <button className="card__btn" onClick={() => this.openModal(character)}>View details</button>
                </div>
              </li>
            );
          })}
        </ul>
        {this.state.selectedCharacter ? (
          <Modal
            show={this.state.show} 
            handleClose={this.hideModal} 
            character={this.state.selectedCharacter} />
        ) : null}
      </React.Fragment>
    )
  };  
}

export default CharacterList;