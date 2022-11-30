import React from "react";

const Image = ({value,text}) => {
    console.log(value);
    return (
        <>
            <img src={value} alt={text}/>
        </>
    )
}
export default Image;