import React from 'react';
import './App.css';
const obtenerConsejo = require("./library");

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { consejo: null };
    this.consultarAPI = this.consultarAPI.bind(this);
  }

  consultarAPI(consejoExtraido){

    if (consejoExtraido.slip.advice === this.state.consejo) {
      obtenerConsejo(this.consultarAPI);
    }

    this.setState({consejo: consejoExtraido.slip.advice});
  }

  render(){
    return (
      <div className="App">
        <main>
          <h1>API consejos</h1>
          <button onClick={this.handlerClick.bind(this)}>
          Obtener consejo
          </button>
            <h2>{this.state.consejo}</h2>
        </main>
  
      </div>
    );
  }

  handlerClick(){
    obtenerConsejo(this.consultarAPI);
  }
}

export default App;
