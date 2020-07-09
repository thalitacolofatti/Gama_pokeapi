import React, { Component } from 'react';
//import axios from 'axios';

import logoLoja from '../components/imagens/Asset9.png'
import gear from '../components/imagens/007-gear.png'
//import Dashboard from '../components/layout/Dashboard';

//const pokeApiUrl = axios.get(`https://pokeapi.co/api/v2/pokemon/`)


export default class Home extends Component {
    // const [ pokeName, setPokeName ] = useState('');
    // const [ listaSFiltro, setListaSF ] = useState([]);
    // const [ listaFiltrada, setListaFiltrada ] = useState([]);
    // const [ erro, setErro ] = useState(false);


    // useEffect(() => {
    //     axios.get(pokeApiUrl)
    //         .then(response => {
    //             response.data.results.map(pokemon => {
    //                 pokeApiUrl.get(pokeApiUrl.url)
    //                     .then(props => {
    //                         listaSFiltro.push(props.data);
    //                         setListaSF([...listaSFiltro]);
    //                     })
    //             });
                
    //         })
    // }, []);

    // function handlePesquisa() {
        
    //     pokeApiUrl.get(`${pokeName}`)
    //         .then(pokemon => {
    //             listaFiltrada.push(pokemon.data);
    //             setListaFiltrada(listaFiltrada.filter(props => {
    //                 return pokeName !== '' ? props.name.includes(pokeName): props;
    //             }));
    //             setErro(false);
    //         })
    //         .catch(err => {
    //             setErro(true);
    //     });
    //}
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                        <a href="index.html" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"> 
                            <img className="logo" src={logoLoja} alt="Logo" style={{width:'6em', height:'auto'}}/>
                        </a>
                        <form className="navbar-form navbar-center">
                            <div className="form-group">
                                <input type="text" className="formcontrol mx-auto" placeHolder="Pesquisar pokemon"/>
                            </div>
                            <button type="button" className="btn btn-default">
                                <img src={gear} alt="enter" style={{width:'1.5em', height:'1.5em'}}/>
                            </button>
                        </form>
                    </nav>
                </div>
                
            </React.Fragment>
        )
    }
}

