import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
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
import React from 'react'
//import { comprado, pokeComprado } from './../pokemon/PokemonCard'

export default function Bag() {
    // const [ bag, setBag ] = useState([]);

    // const comprado = pokeComprado => {
    //     setBag(bag.concat(listaSFiltro[pokeComprado]));
    // }
    // const precoTotal = () => {
    //     return bag.reduce((preco, props) => preco + ((props.id)* 100), 0);
    // }


    return (
        <div>
            <div className="container">
                    <div className='card'>
                        <div className="row">
                            <div className="col-5">
                                <h5>{this.state.pokemonIndex}</h5>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}


