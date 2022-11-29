import { useState } from 'react'
import { MdChevronRight } from "react-icons/md";
import { BsImageFill } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';
import background01 from "../../assets/images/background-01.jpg"
import "./style.scss";

const IMAGES = [
    {
        id: uuidv4(),
        thumbnail: background01
    },
    {
        id: uuidv4(),
        thumbnail: background01
    }
]
const Sidebar = () => {
    const [show, setShow] = useState(true);
    const handleClick = () => {
        setShow(!show);
    }
    return (
        <div className={`siderbar ${show === true ? "active" : ""}`}>
            <MdChevronRight className="iconarrow" onClick={handleClick} />
            <ul className="list">
                <li>
                    <a href='#home'>
                        <i>
                            <BsImageFill />
                        </i>
                        <span>Background</span>
                    </a>
                </li>
            </ul>
            <div className="images">
                {IMAGES.map((image) => (
                    <div className="box">
                        <img src={image.thumbnail} alt="bg-1" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;