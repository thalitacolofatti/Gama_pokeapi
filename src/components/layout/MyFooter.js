import React, { Component } from 'react'

export default class MyFooter extends Component {
    render() {
        return (
            <div>
                <div className="myfooter">
                    <div className="row">
                        <div className="col-5">
                            Icons made by {' '}
                            <a href="https://www.flaticon.com/authors/roundicons-freebies" title="Roundicons Freebies">
                            Roundicons Freebies</a>, {' '}
                            <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
                            Smashicons</a> and {' '}<br/>
                            <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">
                            Darius Dan</a> {' '}
                            from {' '}<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                        </div>
                        <div className="col-3"> 
                            Data From{' '}
                            <a href="https://pokeapi.co/" className="card-link">
                                Pokeapi.co
                            </a>
                        </div>
                        <div className="col-4">
                            <p>2020 © Desenvolvido por Thalita Colofatti</p>
                            <p>site desafio Gama Academy</p>
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
        )
    }
}
