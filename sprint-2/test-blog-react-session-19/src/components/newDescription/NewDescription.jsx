import React, { useEffect, useState } from 'react'
import { useLocation, useOutletContext, useParams } from 'react-router-dom'
import { getAuthor } from '../../services/author';
import { getNew } from '../../services/news';

const NewDescription = () => {

  //Get param URL
  const { newId } = useParams();

  const location = useLocation()
  const [date, setDate] = useOutletContext();

  const [newData, setNewData] = useState({});
  const [author, setAuthor] = useState({})

  const getData = async () => {
    const response = await getNew(newId);
    setNewData(response);
    const authorResponse = await getAuthor(response.authorId);
    setAuthor(authorResponse)
  }

  useEffect(() => {
    getData();
    console.log(location.state);
    setDate('2023/01/10')
  }, [])


  return (
    <div className='container-fluid pt-3 d-flex flex-column justify-content-start gap-2'>
      <img src={newData.image} alt="imagen" className='img-fluid img-thumbnail' />
      <h2 className=''>{newData.title}</h2>
      <div className='d-flex gap-2'>
        <span className='badge bg-secondary'>{newData.date}</span>
        <strong>{author.name}</strong>
        <small>Contacto: {author.phone}</small>
      </div>
      <p>{newData.description}</p>
    </div>
  )
}

export default NewDescription