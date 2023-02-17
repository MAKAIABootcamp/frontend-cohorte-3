import React from 'react'
import { useNavigate } from 'react-router-dom'

const New = ({ title, description, image, id }) => {

    const navigate = useNavigate()

    const handleShowNew = () => {
        navigate(`noticia/${id}`, {state: {
            title,
            description,
            image
        }})
    }

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt="Imagen" />
            <div className="card-body">
                <h5 className='card-title'>{title}</h5>
                <p className="card-text">{description}</p>
                <button className='btn btn-primary' onClick={handleShowNew}>Ver Noticia</button>
            </div>
        </div>
    )
}

export default New