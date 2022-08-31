import React from 'react'


const Item = ({data}) => {
  return (
    <div>
        <div className="cuadros" key={data.name}>
                    <img src={data.img} alt="" />
                    <h1>{data.name}</h1>
                    <h2>{data.price}</h2>
                    <h2>{data.descripcion}</h2>
                    <h3>{data.artista}</h3>

                </div>
    </div>
  )
}

export default Item;
