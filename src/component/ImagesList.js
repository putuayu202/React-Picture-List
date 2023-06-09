import React from "react";

const ImagesList = (props) => {
    const images = props.images.map((image) => {
        return <img key = {image.id} src={image.webformatURL}/>
    })
    console.log(props);
    return(
        <div>
            {images}
        </div>
    )
}

export default ImagesList