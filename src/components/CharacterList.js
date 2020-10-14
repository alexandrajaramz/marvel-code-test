import React from 'react';


class CharacterList extends React.Component {

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
      <ul className="main__list">
        {characters.map((character, i) => {
          return (
            <li key={i}>
              <div>
                <img src={`${character.thumbnail.path}/landscape_xlarge.jpg`} alt={`Picture of ${character.name}`}/>
                <p>{character.name}</p>
                <p>{character.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    )
  };  
}

export default CharacterList;