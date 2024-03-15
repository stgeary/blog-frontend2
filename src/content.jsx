import { PhotosIndex } from "./PhotosIndex";
import { useState, useEffect } from "react";
import axios from "axios";
import { PhotosNew } from "./PhotosNew";


export function Content() {
    const [photos, setPhotos] = useState([]);

   const handleIndexPhotos = () => {
     console.log("handleIndexPhotos");
     axios.get("http://localhost:3000/photos.json").then((response) => {
       console.log(response.data);
       setPhotos(response.data);
     });
   };

   const handleCreatePhoto = (params, successCallback) => {
         console.log("handleCreatePhoto", params);
         axios.post("http://localhost:3000/photos.json", params).then((response) => {
           setPhotos([...photos, response.data]);
           successCallback();
         });
       };

   useEffect(handleIndexPhotos, []);

    return(
        <div>
        <PhotosNew onCreatePhoto={handleCreatePhoto} />
        <PhotosIndex photos={photos} />
        </div>
    )}