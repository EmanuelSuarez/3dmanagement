'use client'

import Image from 'next/image'
import { useState } from 'react'
import {DndContext, closestCenter} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import Product from '../src/components/Product'

export default function Home() {

  const [ projects, setProjects ] = useState([
    {name: 'mate geometrico', id: 1},
    {name: 'mate geometrico esfera', id: 2},
    {name: 'mate giroscopio', id: 3}
  ])

  const handleDragEnd = (event) => {
    const { active, over } = event

    setProjects((projects) => {
      const oldIndex = projects.findIndex(person => person.id === active.id)
      const newIndex = projects.findIndex(person => person.id === over.id)
      
      return arrayMove(projects, oldIndex, newIndex)
    })
  }

  return (
    <div className='flex justify-center' >
      <div className='w-4/6' >
        <h1 className='text-3xl font-bold my-4'>Lista de proyectos</h1>
        <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        >
          <SortableContext
          items={projects}
          strategy={verticalListSortingStrategy}
          >
            {
              projects.map((product) =>{
                return (
                  <Product product={product} key={product.id} />
                )
              })
            }
            
          </SortableContext>
        </DndContext>
      </div>
    </div>
  )
}
