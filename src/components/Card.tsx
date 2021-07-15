import React from 'react'
import "../App.css"

interface Props{
    item:string
}

const Card:React.FC<Props> = ({item })=> {
    return (
        <div className="Card">
            {item}
        </div>
    )
}

export default Card
