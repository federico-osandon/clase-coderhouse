import {useState} from 'react'
import { Link } from 'react-router-dom'


function ItemCount({initial=1, stock=5, onAdd}) {
    const [cantidad, setCantidad] = useState(initial)
    const [pulsado, setPulsado] = useState(false)

    const handleAdd=()=>{
        if (cantidad<stock) {
            setCantidad(cantidad+1)
        }
    }
    const handleRemove=()=>{
        if (cantidad>initial) {
            setCantidad(cantidad-1)
        }
    }

    const handleOnAdd=()=>{
        onAdd(cantidad)
        setPulsado(true)
        //console.console.log();
    }

    return (
      
        <div className="card text-center w-25 m-3">
            <div className="card-header">
                <h4>ItemCount</h4>
            </div>
            <div className="card-body">
                <button onClick={handleRemove}>
                -
                </button>
                <label className="alert">
                    {cantidad}
                </label>
                <button onClick={handleAdd}>+</button><br/>
                
            </div>
            { pulsado ?  
                <Link to={`/cart`} className="btn btn-success">Ir a Cart</Link>
            ://else  
            
            <button 
                className="btn btn-primary btn-block"
                onClick={handleOnAdd}
            >
                Add to Cart
            </button>
                }
        </div>
        
    )
}

export default ItemCount
