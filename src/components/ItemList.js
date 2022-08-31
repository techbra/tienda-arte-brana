import {useState,useEffect} from 'react'
import getFetch from '../Obras/Cuadros'
import Item from './Item'
import './ItemList.css'


const ItemList = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=> {
        getFetch.then(data => {
            setData(data)
            setLoading(false)
        })
    }, [])
  return (
    <>
        <h1> Item List Container</h1>

    {
        loading ? <h2>Cargando...</h2> 
        
        :
        
        <div  className="grid-cuadros" >
            {data.map(data => (
                    <Item key={data.name} data={data}/>
            ))}
        </div>

    }
    </>
  )
}

export default ItemList