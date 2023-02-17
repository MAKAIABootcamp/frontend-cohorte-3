import React, { useEffect, useState } from 'react'
import { getNews } from '../../services/news'
import New from '../new/New'

const News = () => {

    const [listNews, setListNews] = useState([])

    const getData = async () => {
        const response = await getNews();
        setListNews(response)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <main className='container-fluid d-flex flex-wrap pt-3 gap-3'>
            {
                listNews.map((newObject, index) => (
                    <New
                        title={newObject.title}
                        description={newObject.description}
                        key={index}
                        image={newObject.image}
                        id={newObject.id}
                    />
                ))
            }
        </main>
    )
}

export default News