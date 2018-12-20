import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'The Troops of St. Tropez',
      description: 'Gendarme Ludovic Cruchot is re-assigned to the French Riviera seaside resort town of Saint-Tropez where petty criminals and his own daughter give him a hard time.',
    }
  }
  render() {
    return (
      <div className="App">
        <section className="film-container">
          <div className="film-block">
            <h2>
              {this.state.name}
            </h2>
            <div>
              {this.state.description}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
