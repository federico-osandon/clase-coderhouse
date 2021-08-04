//devuelve muchos items
const items=[
    {
        id:'1',
        nombre: 'Gorra Roja',
        categoria: 'adultos',
        precio: 123,
        url: 'https://static4.depositphotos.com/1000261/339/i/600/depositphotos_3394871-stock-photo-red-baseball-cap.jpg'
    },
    {
        id:'2',
        nombre: 'Gorra Roja',
        categoria: 'adultos',
        precio: 123,
        url: 'https://static4.depositphotos.com/1000261/339/i/600/depositphotos_3394871-stock-photo-red-baseball-cap.jpg'
    },
    {
        id:'3',
        nombre: 'Gorra Roja',
        categoria: 'ninos',
        precio: 123,
        url: 'https://static4.depositphotos.com/1000261/339/i/600/depositphotos_3394871-stock-photo-red-baseball-cap.jpg'
    },
    {
        id:'4',
        nombre: 'Gorra Roja',
        categoria: 'ninos',
        precio: 123,
        url: 'https://static4.depositphotos.com/1000261/339/i/600/depositphotos_3394871-stock-photo-red-baseball-cap.jpg'
    },
]

const taskItems = new Promise((res)=>{
    setTimeout(() => {
        res(items)        
    }, 3000);
})

export const getMocksItems=()=>{
    return(
        taskItems
    )
}

//Devuelve un solo item
const item={
    id:'2',
    nombre: 'Gorra Roja',
    precio: 123,
    url: 'https://static4.depositphotos.com/1000261/339/i/600/depositphotos_3394871-stock-photo-red-baseball-cap.jpg'
}

const task = new Promise((res)=>{
    
    res(item)
})

export const getMocks=()=>{
    return(
        task
    )
}
