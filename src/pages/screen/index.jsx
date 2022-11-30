import React, {useState, useEffect } from "react";
import Image from "../../components/image";

const ScreenImage = () => {
    const [dataImage, setDataImage] = useState("");

    useEffect(() => {
        if (localStorage.getItem("image")) {
            let data = localStorage.getItem("image");
            setDataImage(data)
        }
    },[])
    return(
        <div className="screenUI">
            <Image value={dataImage} text="items"/>
        </div>
    )
}
export default ScreenImage;