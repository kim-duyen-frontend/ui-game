import { useState } from "react";
// import ScreenImage from "../screenImage";
import "./style.scss";

function GalleryImage({dataLink}) {
  const [show, setShow] = useState(false);

  const handleClick = (event, data) => {
    event.preventDefault();
    setShow(true);
    // setDataImage(data);
    localStorage.setItem("image", data);
  }
  return (
      <div className="images">
        {dataLink && dataLink.map((image) => (
          <div className="box" key={image.id}>
            <img src={image.thumbnail} alt={image.text} onClick={(event) => handleClick(event, image.thumbnail)} />
          </div>
        ))}
      </div>
  );
}

export default GalleryImage;
