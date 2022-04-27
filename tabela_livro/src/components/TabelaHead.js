import React from "react";
import OrdenadorThead from "./ordenadorThead";

const TabelaHead = (props) => (
    <thead>
        <tr>
            <th colSpan="4">Tabela Livros</th>
        </tr>
        <tr>
            <th >ISBN
                <div className="container-setinhas">
                    <div onClick={() => props.ordenarCrescente("id")}>&#129093;</div>
                    <div onClick={() => props.ordenarDecrescente("id")}>&#129095;</div>
                </div>
            </th>
            <th>Titulo
                <div className="container-setinhas">
                    <div onClick={() => props.ordenarCrescente('titulo')}>&#129093;</div>
                    <div onClick={() => props.ordenarDecrescente('titulo')}>&#129095;</div>
                </div>
            </th>

            <th>Autor
                <div className="container-setinhas">
                    <div onClick={() => { props.ordenarCrescente("autor") }}>&#129093;</div>
                    <div onClick={() => { props.ordenarDecrescente("autor") }}>&#129095;</div>
                </div>
            </th>
            <th></th>
        </tr>
    </thead >
);

export default TabelaHead;