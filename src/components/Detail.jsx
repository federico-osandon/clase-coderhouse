import React from 'react'

function Detail({item}) {
    return (
        <div className="w-50">
            <img src={item.url} className="w-75" />
            <h3>Nombre:{ item.nombre }</h3>  
            <h3>Precio: {item.precio}</h3>  
            <h3>Descripcion: </h3> 
             
        </div>           
    )
}

export default Detail
