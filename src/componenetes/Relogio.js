import React from "react";

export default function Relogio(){
    

        
            return(
                     <p style={{border: '2px solid black', color: '#f00', fontSize: '5em'}}><strong>
                       {new Date().toLocaleTimeString()}
                    </strong>
                    </p>
        )
        
    
}
setInterval(Relogio, 1000)