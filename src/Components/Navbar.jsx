import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const dropdownRef = useRef(null);

  const toggleDropdown = (menu, level = 1) => {
    setDropdownOpen((prev) => {
      // Pentru submeniurile de nivel 2, păstrează starea părintelui
      if (level === 2) {
        return {
          ...prev,
          [menu]: !prev[menu],
        };
      }
      // Pentru meniurile de nivel 1, închide toate celelalte
      return {
        ...Object.keys(prev).reduce(
          (acc, key) => ({ ...acc, [key]: false }),
          {}
        ),
        [menu]: !prev[menu],
      };
    });
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
        { title: "Licență", path: "/licenta", download: false },
        { title: "Masterat", path: "/masterat", download: false },
        { title: "Doctorat", path: "/doctorat", download: false },
      ],
    },
    {
      title: "Programe de studii",
      submenu: [
        {
          title: "Studii de licență",
          path: require("../assets/docs/Plan_invatamant_CSM-1.pdf"),
          download: true,
        },
        {
          title: "Masterat",
          path: require("../assets/docs/Plan_de_invatamant_Masterat_SIS_UPB.pdf"),
          download: true,
        },
      ],
    },
    {
      title: "Cercetare",
      submenu: [
        {
          title: "Centrul CCMA",
          submenu: [
            { title: "Conducere", path: "/ccma", download: false },
            { title: "Servicii", path: "/ccma-servicii", download: false },
            { title: "Dotari", path: "/dotari", download: false },
            {
              title: "Proiecte derulate",
              path: "/ccma-proiecte",
              download: false,
            },
          ],
        },
        { title: "Laboratoare", path: "/laboratoare", download: false },
        { title: "Parteneri", path: "/parteneri", download: false },
      ],
    },
    {
      title: "Evenimente",
      submenu: [
        { title: "Anunțuri", path: "/anunturi", download: false },
        { title: "SCSS", path: "/scss", download: false },
        { title: "CCT", path: "/cct", download: false },
        { title: "ICSAM", path: "/icsam", download: false },
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
                    onClick={() => toggleDropdown(item.title, 1)}
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
                              onClick={() => toggleDropdown(subItem.title, 2)}
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
                                    onClick={closeAllDropdowns}
                                  >
                                    {nestedItem.title}
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        ) : subItem.download ? (
                          <a
                            href={subItem.path}
                            download={true}
                            onClick={closeAllDropdowns}
                          >
                            {subItem.title}
                          </a>
                        ) : (
                          <Link to={subItem.path} onClick={closeAllDropdowns}>
                            {subItem.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={item.path} onClick={closeAllDropdowns}>
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
