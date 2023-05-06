import React, {useState} from 'react'
import Header from './componenetes/Header'
import Corpo from './componenetes/Corpo'
import './App.css'
import Relogio from './componenetes/Relogio'
import Numero from './componenetes/Numero'
import Classe from './componenetes/Classe'

import Led from './componenetes/Led'


export default function App(){

  const [num, setNum] = useState(10);
  const [nome, setNome] = useState('')
  const [carro, setCarro] = useState('HRV')
  
 
  return (
    <>
       <Classe canal="CFB Curso" curso="reactJs"/>
       

       <label> Digite seu Nome </label>
       <input type="text" name='nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
       <p>Nome digitado: {nome}</p>
       <label>Selecone um carro</label>
       <select value={carro} onChange={(e) => setCarro(e.target.value)}>
          <option value="HRV">HRV</option>
          <option value="golf">Golf</option>
          <option value="Cruze">Cruze</option>
          <option value="Argo">Argo</option>
          

       </select>
       <p>Carro selecionado: {carro}</p>
   <Led/>


    <Relogio/>
    <div className='caixa'>  
    <Numero num={num} setNum={setNum}/>
             
       <Header/> 
       <Corpo/>
      
      <p>Valor do state num: {num} </p> 

       
     </div>
     </>
     )
}