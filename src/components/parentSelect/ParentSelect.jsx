import React, {useEffect, useState} from 'react';

function ParentSelect(){
    const ACCESS_KEY = "R7Sr9KqUa5eBGbS2IMTSNZNdP74rFmAHzig-sh08_r4";
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
            .then((response) => response.json())
            .then((data) => setImageUrl(data.urls.regular))
            .catch((error) => console.error("Ошибка:", error));
    }, []);

    return(
        <>
            {imageUrl && <img src={imageUrl} alt="Unsplash Random" style={{ width: "500px" }} />}
        </>
    )
}

export default ParentSelect;