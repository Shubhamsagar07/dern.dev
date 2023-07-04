import React from 'react'
import Card from './Card'
import { BsThreeDots } from "react-icons/bs"

export default function Category(props) {
  return (
    <div className='min-w-fit p-5 m-3'>
        <div className='flex justify-between items-center mb-3'>
            <div className='mr-10'>
                <h1 contentEditable className='text-xl dark:text-white'>{props.category.title}</h1>

            </div>
            <BsThreeDots className='dark:text-white' />
        </div>
        {props.cards.map((card) => (
            <Card card={card} />
        ))}
    </div>
  )
}
