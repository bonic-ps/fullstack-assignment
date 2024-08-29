import React from 'react';
import './card.css';

export default function Card({data}){
    console.log('this is card comonent ', data)
    return (
        <>
          <div className="card-container" key={data.id}>
            <div className="card-title">{data.title}</div>
            <div className="card-description">{data.description}</div>
          </div>
        </>
    )
}