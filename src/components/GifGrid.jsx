import React, { useEffect, useState } from 'react'
import { GifItem } from './GifItem';

const getGifs = async (category) =>{
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=0VjjfIQmcJuCRLJcsCvBBuqZmO0JBFWh&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    console.log(data)

    return gifs;
}

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const getImages =  async() =>{
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect( ()=>{
        getImages();
    }, [])
    

        
  return (
    <>
        <h3>{category}</h3>
        <div className='card-grid'>
            {images.map((image) => {
                return <GifItem key={image.id} {...image}/>
            })}
        </div>
    </>
  )
}
