import React from 'react'
import Item from './Item'

function ItemList({items}) {
    return (
        <div className="row p-4">
            {items.map(item => <Item key={item.id} item={item} />)}

        </div>
          
    )
}

export default ItemList
