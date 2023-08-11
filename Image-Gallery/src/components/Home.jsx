import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/Home.css';
import Card from "./Card";

function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const api =
    "https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20";

  async function fetchImages() {
    try {
      setLoading(true);
      const { data } = await axios.get(api);
      setPhotos(data.photos);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

  if(loading){
    return <div className="loader">Loading...</div>
  }
  return (
       <div className="main-wrapper">
        {
            photos.map((photo, index) => {
                return <Card id={photo.id} key={index} title={photo.title} imageUrl={photo.url}/>
            })
        }
       </div>
  )
}

export default Home;
