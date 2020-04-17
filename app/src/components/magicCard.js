import React from 'react'


function MagicCard(props) {

    return(
        <div className= "card">
            <h2 className= "name">{props.name}</h2>
            <img className= "cardImage" src={props.image} alt="CardImage"/>
    <p className="info">Cost:{props.cost}<br/> {props.text} <br/> {props.power}/{props.toughness} </p>
        </div>
    )
    
}

export default MagicCard