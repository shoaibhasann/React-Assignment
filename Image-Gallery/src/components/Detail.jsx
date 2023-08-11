import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../styles/Detail.css';

function Detail() {

    const { id } = useParams();
    const [photoDetail, setPhotoDetail] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPhoto =  async() => {
        const { data } = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        setPhotoDetail(data.photo);
    }

    useEffect(() => {
        fetchPhoto();
    }, []);

    if(loading){
        return <div className="loader">Loading...</div>;
    }
      
  return (
    <div className='details-wrapper'>
        <div className='image-wrapper'>
            <img src={photoDetail.url} alt={photoDetail.title} />
        </div>
        <div>
            <h1>{photoDetail.title}</h1>
            <p>{photoDetail.description}</p>
        </div>
    </div>
  )
}

export default Detail