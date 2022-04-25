import React, { Component } from 'react';
import './App.css';
import TabelaBody from './components/TabelaBody';
import TabelaFoot from './components/TabelaFoot';
import TabelaHead from './components/TabelaHead';

class App extends Component {
  state = {
    livros: [],
    coluna: []
  };

  componentDidMount() {
    fetch("/api/livros.json")
      .then((response) => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function (error) {
        alert("Erro na requisição: " + error)
        console.log("Erro na requisição:", error);
      })

  };

  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter(livro => livro.id !== id);
    this.setState({ livros })
  };

  handleOrdenarCrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) => a.titulo < b.titulo ? -1 : 0);
    this.setState({ livros })
  };

  handleOrdenarDecrescente = (titulo) => {
    
    const livros = this.state.livros.sort((a, b) => b.titulo < a.titulo ? -1 : 0);
    this.setState({ livros })
  };

  render() {
    return (
      <div>
        <table className='tabela'>
          <TabelaHead
            ordenarCrescente={this.handleOrdenarCrescente}
            ordenarDecrescente={this.handleOrdenarDecrescente}
          />
          <TabelaBody
            livros={this.state.livros}
            removerLinha={this.handleRemoverLinha}
          />
          <TabelaFoot
            qtdLivros={this.state.livros.length}
          />
        </table>
      </div>
    );
  }
}

export default App;
