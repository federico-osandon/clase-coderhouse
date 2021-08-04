import React from 'react'
import {Link} from 'react-router-dom'
 
function Item({item={}}) {
    return (
        <div className="col-sm-3">
            <div className="card mt-3 ml-5 w-100">
                <div className="card-header">
                    {item.nombre}
                </div>
                <div className="card-body">
                    <div>
                        <img src={item.url} className="w-100" />
                    </div>
                    precio: {item.precio}
                    <p>{item.categoria}</p>
                </div>   
                <Link 
                    to={`/detail/${item.id}`} 
                    className="btn btn-outline-primary"
                >VER DETALLE</Link>             
            </div>
        </div>
    )
}

export default Item
