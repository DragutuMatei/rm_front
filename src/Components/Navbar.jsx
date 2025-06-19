import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const dropdownRef = useRef(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}), // Close all other dropdowns
      [menu]: !prev[menu],
    }));
  };

  const closeAllDropdowns = () => {
    setDropdownOpen({});
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeAllDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      title: "Admitere",
      submenu: [
        { title: "Licență", path: "/licenta" },
        { title: "Masterat", path: "/masterat" },
        { title: "Doctorat", path: "/doctorat" },
      ],
    },
    {
      title: "Programe de studii",
      submenu: [
        { title: "Studii de licență", path: "/studii-licenta" },
        { title: "Masterat", path: "/masterat-studii" },
      ],
    },
    {
      title: "Cercetare",
      submenu: [
        {
          title: "Centrul CCMA",
          submenu: [
            { title: "Conducere", path: "/ccma-conducere" },
            { title: "Servicii", path: "/ccma-servicii" },
            { title: "Doctori", path: "/ccma-doctori" },
            { title: "Proiecte derulate", path: "/ccma-proiecte" },
          ],
        },
        { title: "Laboratoare", path: "/laboratoare" },
        { title: "Parteneri", path: "/parteneri" },
      ],
    },
    {
      title: "Evenimente",
      submenu: [
        { title: "Anunțuri", path: "/anunturi" },
        { title: "SCSS", path: "/scss" },
        { title: "CCT", path: "/cct" },
        { title: "ICSAM", path: "/icsam" },
      ],
    },
  ];

  return (
    <div className="down" ref={dropdownRef}>
      <Link to="/" className="logo">
        <img src={require("../assets/images/fiirlogo.png")} alt="FIIR Logo" />
        <img
          src={require("../assets/images/logo_rm.svg").default}
          alt="RM Logo"
        />
      </Link>

      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`drop ${isOpen ? "active" : ""}`}>
        <div className="links">
          {menuItems.map((item, index) => (
            <div className="link" key={index}>
              {item.submenu ? (
                <div className="dropdown">
                  <span
                    className="dropdown-toggle"
                    onClick={() => toggleDropdown(item.title)}
                  >
                    {item.title}
                  </span>
                  <div
                    className={`dropdown-menu ${
                      dropdownOpen[item.title] ? "show" : ""
                    }`}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <div className="dropdown-item" key={subIndex}>
                        {subItem.submenu ? (
                          <div className="dropdown">
                            <span
                              className="dropdown-toggle"
                              onClick={() => toggleDropdown(subItem.title)}
                            >
                              {subItem.title}
                            </span>
                            <div
                              className={`dropdown-menu ${
                                dropdownOpen[subItem.title] ? "show" : ""
                              }`}
                            >
                              {subItem.submenu.map(
                                (nestedItem, nestedIndex) => (
                                  <Link
                                    to={nestedItem.path}
                                    key={nestedIndex}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {nestedItem.title}
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        ) : (
                          <Link
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={item.path} onClick={() => setIsOpen(false)}>
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <div className="button main">
            <Link to="#">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
