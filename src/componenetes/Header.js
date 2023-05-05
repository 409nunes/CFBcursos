import React from "react"
import Logo from './imgs/971.png'

export default function Header(){
    return (
        <header>
           <img src={Logo} alt="Minha Figura"/>
           <h1>CFB curso</h1>
        </header>
    )
}