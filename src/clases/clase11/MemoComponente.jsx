import React, {useState, useEffect, memo}  from 'react'

const data = [
    { nombre: 'fede1', id: 1 },
    { nombre: 'fede2', id: 2 },
    { nombre: 'fede3', id: 3 },
    { nombre: 'fede4', id: 4 }
  ];
  //memo(fnComponente, condicionFN)
  const EstadoList = memo(({ item }) => {//item

      console.log('rendering Estado list');
  
      return (
        <>
          <li>{item.nombre}</li>
        </>
      );
    }, (anterior, posterior)=> anterior.item.id ===posterior.item.id )
    
  

 const MemoComponente = () => {//itemlist
    const [estado, setEstado] = useState([]);
    const [cambio, setCambio] = useState(true);
    useEffect(() => {
        setEstado(data)//api
    },[cambio])

    return (
        <>
            {estado.map(resp => (
                <EstadoList key={resp.id} item={resp} setCambio={setCambio} cambio={cambio}/>
            ))}
            <button onClick={() =>{
                setCambio(!cambio)}
            }>
                click
                </button>
        </>
    )
}
export default MemoComponente
