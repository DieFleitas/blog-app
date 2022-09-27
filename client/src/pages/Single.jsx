import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Edit from "../img/edit.png";
import Delete from "../img/edit.png";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="" alt="" />
        <div className="user">
          <img src="" alt="" />
          <div className="info">
            <span>Diego</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, harum!
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          tempore ipsam fugit accusantium consequuntur sunt id esse eius facere
          ad.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
