import React from "react";

export default class Classe extends React.Component{
       constructor(props){
            super()
       }

    render(){
        return(
            <div>
             <h1>Primeiro Componente de Classe</h1>
             <p><strong>Canal: {this.props.canal}</strong></p>
             <p><strong>Curso: {this.props.curso}</strong></p>
            </div>
            
        )
    }
}

