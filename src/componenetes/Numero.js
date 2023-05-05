import React from "react";

export default function Numero(props){

    function prova(){
        props.setNum(props.num + 10)
    }
    // a função dentro do html pode ser assim também => <button onClick={() => props.setNum(props.num + 10)}
    return(
        <p>
            <p>Valor do state num em Numero: {props.num}</p>
            <button onClick={prova}>Soma 10</button>
        </p>
    )
}