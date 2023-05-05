import React from "react"

export default function Dados(props){
    let n1 = 11;
    const n2 = 5;

    return(
        <section>
            <p><strong>Canal: </strong>{props.canal()}</p>
            <p><strong>YouTube: </strong>{props.youtube}</p>
            <p><strong>Curso: </strong>{props.curso}</p>
            <p>{'A soma de ' + n1 + ' com ' + n2 + ' é igual ' + props.somar(n1, n2)}</p>
        </section>
    )
}