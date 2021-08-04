import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../components/ItemDetail'// export default
import { getMocks } from '../servicios/getMocks' // export


function ItemDetailContainer() {
    const [item, setItem] = useState({})

    const {id} = useParams()

    useEffect(() => {
       getMocks()
       .then(resp => setItem(resp))
    }, [])

    console.log(id);
    return (
        <>
          <ItemDetail item={item}/>  
        </>
    )
}

export default ItemDetailContainer

