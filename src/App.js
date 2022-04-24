import React, { Component } from 'react';
import './App.css';
import TabelaBody from './components/TabelaBody';
import TabelaFoot from './components/TabelaFoot';
import TabelaHead from './components/TabelaHead';

class App extends Component {
  state = {
    livros: [
      {
        id: "443-776-0909",
        titulo: "CSS Grid Layout",
        autor: "Maurício Samy Silva"
      },
      {
        id: "321-456-7987",
        titulo: "Node Essencial",
        autor: "Ricardo R. Lacheta"
      },
      {
        id: "098-776-132",
        titulo: "Aprendendo Material Design",
        autor: "Kyle Mew"
      }
    ]
  }
  render() {
    return (
      <table className='tabela'>
        <TabelaHead />
        <TabelaBody livros={this.state.livros}/>
        <TabelaFoot qtdLivros={this.state.livros.length}/>
      </table>
    );
  }
}

export default App;
