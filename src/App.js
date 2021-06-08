import React, {Component} from 'react';
import biscoito from './assets/biscoito.png';
import './estilo.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

this.frases = ['O riso é a menor distância entre duas pessoas.', 
               'Para educar, não precisa bater!',
               'Deixe de lado as preocupaçoes e seja feliz!', 
               'A maior barreira para o sucesso é o medo do fracasso']

this.quebraBiscoito = this.quebraBiscoito.bind(this);

  }


  quebraBiscoito(){
   let state = this.state;
   let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase ='" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }


  render(){
    return(
      <div className="container">
          <img src={biscoito} className="img"/>
          <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
          <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}


class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;
