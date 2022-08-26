import {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Count from './components/Count';


function App() {
  const [estadoCarrito, setEstadoCarrito] = useState("Carrito vacio")
  const [numeroProductos, setNumeroProductos] = useState(0);

  useEffect(()=>{
    setTimeout(() => {
      setEstadoCarrito("Esperando productos")
    }, 2000);
  },[numeroProductos])

  const agregar = (productos)=>{
    console.log('funcion agregar', productos)
    setNumeroProductos(productos);
    setEstadoCarrito(`el carrito tiene ${productos}`);
  }

  console.log('numeroProductos', numeroProductos);

  return (
    <div className="App">
      <header className="App-header">
     <NavBar />
      <Count stock={10} initial={0} sumar a mi pedido={agregar}/>
      </header>
    </div>
  );
}

export default App;
