import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemCount from '../components/ItemCount'
import ItemList from '../components/ItemList'// se le puede definir el nombre que querramos
import { getMocksItems } from '../servicios/getMocks' // lo tenemos que importar como lo creamos
import { getFirestore } from '../servicios/getFirebase'
 
import Spinner from 'react-bootstrap/Spinner'


const handleCount=(cant)=>{
    alert(`ud a agregado : ${cant}`)
}


function ItemListContainer() { 
    const [items, setItems] = useState([])//estado 
    const [loading, setLoading] = useState(true)
    const { categoryId= undefined} = useParams()
    const user = false

    useEffect(() => {

        let db = getFirestore()
        let itmesCollection = db.collection('items')
        const dbQuery = categoryId ?  itmesCollection.where('categoryId', '==', categoryId) : itmesCollection
        dbQuery.get().then(resp => {
            if (resp.size === 0) {
                console.log('No Result!!')
            }
            setItems(resp.docs.map(item=> ({id: item.id, ...item.data()}) ))
        })
        .catch((error) => {
            console.log("Error searching items", error)
        }).finally(() => {
            setLoading(false)
        })



        // fetch('https://pokeapi.co/api/v2/pokemon/')
        // .then(data=> data.json())
        // .then(res => setPokeList(res.results))//array  
        // if(categoryId===undefined){
        //     getMocksItems()
        //     .then(resp=>{ 
        //         setItems(resp)                
        //         setLoading(false)
        //     })
        // }else{
        //     getMocksItems()
        //     .then(resp=> setItems(resp.filter(it => it.categoria===categoryId)))
        // }
    }, [categoryId])

    if(user){
        return <h1>Login</h1>
    }


    console.log(items);
    return (
        <div>

        { loading ? 
                <center>
                    <Spinner animation="border" role="status" className="mt-5">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>                    
                </center>
            : 
                <ItemList items={items} />
        }
         
         
          {/* <ItemCount /> */}

        
         </div>
        
        
    )
}

export default ItemListContainer
