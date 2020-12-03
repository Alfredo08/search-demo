import React from 'react';

function Fruit( props ){
    return(
        <div>
            <h2> Fruit: { props.fruit.name }</h2>
            <p> Id: { props.fruit.id } </p>
        </div>
    )
}

export default Fruit;