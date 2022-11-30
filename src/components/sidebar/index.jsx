import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdChevronRight } from "react-icons/md";
import { BsImageFill, BsTreeFill } from "react-icons/bs";
import GalleryImage from "../gallery";
import object01 from "../../assets/images/object-1.png";
import object02 from "../../assets/images/object-2.png";
import object03 from "../../assets/images/object-3.png";
import "./style.scss";

const ITEMS = [
  {
    id: uuidv4(),
    thumbnail: object01,
    text: "object 1",
  },
  {
    id: uuidv4(),
    thumbnail: object02,
    text: "object 2"
  },
  {
    id: uuidv4(),
    thumbnail: object03,
    text: "object 3"
  }
];
const Sidebar = () => {
  const [show, setShow] = useState(true);
  const [dataLink, setDataLink] = useState([]);

  const handleClick = () => {
    setShow(!show);
  };
  
  const handleSelectItems = () => {
    setDataLink(ITEMS);
  };
  return (
    <>
      <div className={`siderbar ${show === true ? "active" : ""}`}>
        <MdChevronRight className="iconarrow" onClick={handleClick} />
        <ul className="list">
          <li>
            <a href="#">
              <i>
                <BsImageFill />
              </i>
              <span>Background</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={handleSelectItems}>
              <i>
                <BsTreeFill />
              </i>
              <span>Object</span>
            </a>
          </li>
        </ul>
      </div>
      <GalleryImage dataLink={dataLink} />
    </>
  );
};

export default Sidebar;
