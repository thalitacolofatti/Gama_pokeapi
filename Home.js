import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logoLoja from '../components/imagens/Asset9.png'
import gear from '../components/imagens/007-gear.png'
//import Dashboard from '../components/layout/Dashboard';

const pokeApiUrl = axios.get(`https://pokeapi.co/api/v2/pokemon/`)


function App(props) {
    const [ pokeName, setPokeName ] = useState('');
    const [ listaSFiltro, setListaSF ] = useState([]);
    const [ listaFiltrada, setListaFiltrada ] = useState([]);
    const [ erro, setErro ] = useState(false);
    const pokepoke = props;

    useEffect(() => {
        axios.get(pokeApiUrl)
            .then(response => {
                response.data.results.map(pokemon => {
                    axios.get(pokeApiUrl)
                        .then(pokepoke => {
                            listaSFiltro.push(pokepoke.data);
                            setListaSF([...listaSFiltro]);
                        })
                });
            })
    }, []);

    function handlePesquisa() {
        
        pokeApiUrl.get(`${pokeName}`)
            .then(pokemon => {
                listaFiltrada.push(pokemon.data);
                setListaFiltrada(listaFiltrada.filter(pokepoke => {
                    return pokeName !== '' ? pokepoke.name.includes(pokeName): pokepoke;
                }));
                setErro(false);
            })
            .catch(err => {
                setErro(true);
        });
    }

    return (
        <div className="HomeContainer">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a href="/Home.js" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"> 
                        <img className="logo" src={logoLoja} alt="Logo" style={{width:'6em', height:'auto'}}/>
                    </a>
                    <form className="navbar-form navbar-center" >
                        <div className="form-group">
                            <input type="text" className="formcontrol mx-auto" placeHolder="Pesquisar pokemon" value={pokeName} onChange={e => setPokeName(e.target.value)}/>
                        </div>
                        <button type="button" className="btn btn-default" onClick={handlePesquisa}>
                            <img src={gear} alt="enter" style={{width:'1.5em', height:'1.5em'}}/>
                        </button>
                    </form>
                </nav>
            </div>
            {erro ? <p className="ErrorMsg">Ocorreu um erro. Tente novamente</p> : ''}
            
        </div>
    )
}
export default App;