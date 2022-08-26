import { useState } from "react"

const Count =({stock, initial}) => {
    const [contador, SetContador] = useState(initial);
    const incrementar = () =>{
        if(contador<stock){
           SetContador(contador + 1)
            }
       }
       const descrementar = ()=>{
        if(contador>0){
            SetContador(contador-1)
        }
    }
    
       return(
           <div>
       <p>Numero de clics {contador}</p>
       <button onClick={incrementar}>Incrementar</button>
       <button onClick={descrementar}>descrementar</button>
       <button onClick={"agregar"}>Sumar a mi pedido</button>
       
       
       </div>
              
     );
       
    }
    export default Count;
       
       
       
