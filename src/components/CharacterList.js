import React from 'react';
import Modal from './Modal';

class CharacterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      show: false,
      selectedCharacter: {}
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
      selectedCharacter: {}
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
              <li key={i}>
                <div>
                  <img src={`${character.thumbnail.path}/landscape_xlarge.jpg`} alt={`Official art for ${character.name}`}/>
                  <p>{character.name}</p>
                  <p>{character.description}</p>
                  <button onClick={() => this.openModal(character)}>View details</button>
                </div>
              </li>
            );
          })}
        </ul>
        <Modal
          show={this.state.show} 
          handleClose={this.hideModal} 
          character={this.state.selectedCharacter} />
      </React.Fragment>
    )
  };  
}

export default CharacterList;