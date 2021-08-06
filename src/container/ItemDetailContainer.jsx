import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../components/ItemDetail'// export default
import { getMocks } from '../servicios/getMocks' // export
import { getFirestore } from '../servicios/getFirebase'


function ItemDetailContainer() {
    const [item, setItem] = useState({})

    const {id} = useParams()

    useEffect(() => {
        const dbQuery = getFirestore()
        dbQuery.collection('items').doc(id).get()
        .then(response => setItem({...response.data(), id: response.id}))
        console.log(dbQuery)
        // getMocks()
        // .then(resp => setItem(resp))
    }, [])

    console.log(item);
    return (
        <>
          <ItemDetail item={item}/>  
        </>
    )
}

export default ItemDetailContainer

