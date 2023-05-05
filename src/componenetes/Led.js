import React, {useState} from 'react'

import LedVerde from './imgs/verde.png'
import LedVermelho from './imgs/vermelho.png'


export default function App(){

  
  const [ligado, setLigado] = useState(false); 
  return (
    <>
    
       <img style={{width:'50px'}} src={ligado? LedVerde: LedVermelho} alt='imagem'/>
       <button onClick={() => setLigado(!ligado)}> {ligado ? 'Desligar': 'Ligar'}</button>
       
    </>
     )
}