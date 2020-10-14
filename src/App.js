import React from 'react';
import './App.css';
import Filters from './components/Filters';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      characterQuery: ''
    }

    this.searchCharacter = this.searchCharacter.bind(this);
    this.getCharacters = this.getCharacters.bind(this);

  }

  getCharacters() {
    const characterQuery = this.state.characterQuery;
    const ts = 1;
    const publicKey = '1e04ec5be07e23c33c7b7b6fb68e3a56';
    const hash = '933dfdff726f5ca5518a5d8ba3873990';
    const url = `http://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=${characterQuery}&apikey=${publicKey}&ts=${ts}&hash=${hash}`;

    fetch(url).then(response => response.json()).then(data => {
      this.setState({
        characters: data.data.results
      })
    })
  }

  searchCharacter(event) {
    const searchedCharacter = event.currentTarget.value;
    this.setState({
      characterQuery: searchedCharacter
    })
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="header__title">Marvel Finder</h1>
          <nav className="header__nav">
            <Filters 
              searchCharacter={this.searchCharacter}
              getCharacters={this.getCharacters} />
          </nav>
        </header>
        <main className="app__main">
          main
        </main>
        <footer className="app__footer">
          Data provided by Marvel. © 2014 Marvel
        </footer>
      </div>
    );
  }
}

export default App;