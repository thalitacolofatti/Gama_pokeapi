import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Dashboard from './components/layout/Dashboard';
//import Bag from './components/layout/Bag';


class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <Home/>
          <div className="row content">
            <div className="col-sm-9">
              <Route exact path="/" component={ Dashboard }/>
            </div>
            <div className="col-sm-3 container">
              
            </div>
          </div>
          <div className="myfooter">
              <div className="container-fluid navbar fixed-bottom">
                    <div className="row">
                        <div className="col-5">
                            Icons made by {' '}
                            <a href="https://www.flaticon.com/authors/roundicons-freebies" title="Roundicons Freebies">
                            Roundicons Freebies</a>, {' '}
                            <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
                            Smashicons</a> and {' '}
                            <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">
                            Darius Dan</a> {' '}
                            from {' '}<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                            {' | '} Data From{' '}
                            <a href="https://pokeapi.co/" className="card-link">
                                Pokeapi.co
                            </a>
                        </div>
                        <div className="col-5">
                            <p>2020 © Desenvolvido por Thalita Colofatti 
                            site desafio Gama Academy</p>
                        </div>
                        <div className="col-2">
                            <a id="icone-link" href="https://github.com/thalitacolofatti/">
                                <i class="fab fa-github fa-1x" aria-hidden="true"></i>
                            </a>
                            <a id="icone-link" href="https://linkedin.com/in/thalitaacb/">
                                <i class="fab fa-linkedin-in fa-1x" aria-hidden="true"></i>
                            </a>
                            <a id="icone-link" href="https://instagram.com/filoactto/">
                                <i class="fab fa-instagram fa-1x" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
              </div>
        </div>
      </Router>
    )
  }
}



export default App;
