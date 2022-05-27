import React from 'react'
import Card from './Card';


const CardList = ({kittens}) => {
    const cardArray = kittens.map((user,i)=> {
        return <Card 
        key={i} 
        id={kittens[i].id} 
        name={kittens[i].name} 
        email={kittens[i].email} 
        />
        })
    
  return (
      <div>{cardArray}</div>
    
  )
}

export default CardList