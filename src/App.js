import React from 'react';
import './App.css';
const obtenerRespuesta = require("./library");

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { respuesta: null };
    this.consultarAPI = this.consultarAPI.bind(this);
  }

  consultarAPI(respuestaExtraida){

    if(respuestaExtraida.activity === this.setState.respuesta){
      obtenerRespuesta(this.consultarAPI);
    }
    
    this.setState({respuesta: respuestaExtraida.activity});
  }

  render(){
    return (
      <div className="App">
        <main>
          <h1>Bored API React</h1>
          <button onClick={this.handlerClick.bind(this)}>
          Llamar API
          </button>
            <h2>{this.state.respuesta}</h2>
        </main>
  
      </div>
    );
  }

  handlerClick(){
    obtenerRespuesta(this.consultarAPI);
  }
}

export default App;
