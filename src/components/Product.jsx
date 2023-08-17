import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'

const Product = ({product}) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({
        id: product.id
    })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

  return (
    <div 
    style={style}
    ref={setNodeRef}
    {...attributes}
    {...listeners}

    className='bg-slate-600 p-4 rounded-md shadow-md text-white my-2' >
        <h1>{product.name}</h1>
    </div>
  )
}

export default Product