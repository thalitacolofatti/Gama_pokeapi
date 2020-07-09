import React, { Component } from 'react';

import styled from 'styled-components';

import meuspinner from '../imagens/meuspinner.gif';
import axios from 'axios';

const Sprite = styled.img`
    width 8em; 
    height: 8em;
    display: none;
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-user-select: none;
`;

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18), 0 1px 3px rgba(0, 0, 0, 0.26);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.20);
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-user-select: none;
`;
const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    eletric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '8235551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'B1C12E',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
}



export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        types: [],
        base_experience: '',
        imageLoading: true,
        //toManyRequests: false
    };
        
    async componentDidMount() {
        const { name, url } = this.props;
        const pokemonIndex = url.split("/")[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const pokemonRes = await axios.get(pokemonUrl);
        const price =  pokemonRes.data.base_experience;
        const types = pokemonRes.data.types.map(type => type.type.name);

        this.setState({
            name, 
            imageUrl, 
            pokemonIndex,
            types, 
            price
        });
    }

    render() {
        return (
            <div className='col-md-3 col-sm-12 mb-5'>
                <div>
                    <Card className="card">
                        {this.state.imageLoading ? (
                            <img src={meuspinner} style={{width:'8em', height:'8em'}}
                            className="card-img-top rounded mx-auto d-block mt-2" alt="Spinner"
                            />
                        ) : null}
                        <Sprite 
                                    className="card-img-top rounded mx-auto mt-2"
                                    onLoad={() => this.setState({ imageLoading: false })}
                                    onError={() => this.setState({ toManyRequests: true })}
                                    src={this.state.imageUrl}
                                    style={
                                        //this.state.toManyRequests ? { display: "none" } :
                                        this.state.imageLoading ? null : { display: "block" }
                                    }
                        />
                        {/* {this.state.toManyRequests ? ( <h6 className="mx-auto">
                            <span className="badge badge-danger mt-2">Muitos acessos</span>
                        </h6> 
                        ) : null }  */}
                        <div className="card-body mx-auto">
                            <h6 className="card-title">
                                {this.state.name
                                    .toLowerCase()
                                    .split(" ")
                                    .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                                    .join(' ')} {' '} #{this.state.pokemonIndex}
                            </h6>
                            <h6 className="card-text">
                                    {this.state.types.map(type => (
                                        <span
                                            key={type}
                                            className="badge badge-dark badge-pill mr-1"
                                            style={{background: `${TYPE_COLORS[type]}`, 
                                            color: 'white'}}
                                        >
                                            {type
                                            .toLowerCase()
                                            .split(" ")
                                            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                            .join(' ')}
                                        </span>
                                    ))}
                                    <p className="card-text preco">R$ {this.state.price},00</p>
                                </h6>
                            
                            <button className="btn btn-dark">Comprar</button>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}
