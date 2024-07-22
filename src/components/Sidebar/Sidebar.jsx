import { CgProfile } from "react-icons/cg";
import { FaPaintBrush } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo_rens from '../../assets/logo_rendy.png';
import "./Sidebar.css";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <img className="logo" src={logo_rens} alt="logo" onClick={toggleSidebar} />
      <ul>
        <li className={`menu ${open ? "open" : ""}`}>
          <CgProfile className="icons" />
          {open && <p>About</p>}
        </li>
        <li className={`menu ${open ? "open" : ""}`}>
          <FaPaintBrush className="icons" />
          {open && <p>Projects</p>}
        </li>
        <li className={`menu ${open ? "open" : ""}`}>
          <FaSackDollar className="icons" />
          {open && <p>Pricing</p>}
        </li>
        <li className={`menu ${open ? "open" : ""}`}>
          <BsFillTelephoneFill className="icons" />
          {open && <p>Contact</p>}
        </li>
      </ul>
      {open && (
        <div>
          <a href="">
            <button className="btn" onClick={() => alert("wa rendy")}>Hire Me</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
