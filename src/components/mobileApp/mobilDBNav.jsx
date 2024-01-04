import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [showRamDropdown, setShowRamDropdown] = useState(false);
  const [showRomDropdown, setShowRomDropdown] = useState(false);
  const [showOsDropdown, setShowOsDropdown] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRams, setSelectedRams] = useState([]);
  const [selectedRoms, setSelectedRoms] = useState([]);
  const [selectedOs, setSelectedOs] = useState(null);

  const brands = ["Samsung", "Xiaomi", "Realme", "Apple"];
  const rams = ["3GB", "4GB", "6GB", "8GB"];
  const roms = ["32GB", "64GB", "128GB", "256GB"];
  const oss = ["Android", "iOS"];

  const toggleBrandDropdown = () => {
    setShowBrandDropdown(!showBrandDropdown);
    setShowRamDropdown(false);
    setShowRomDropdown(false);
    setShowOsDropdown(false);
  };

  const toggleRamDropdown = () => {
    setShowRamDropdown(!showRamDropdown);
    setShowBrandDropdown(false);
    setShowRomDropdown(false);
    setShowOsDropdown(false);
  };

  const toggleRomDropdown = () => {
    setShowRomDropdown(!showRomDropdown);
    setShowBrandDropdown(false);
    setShowRamDropdown(false);
    setShowOsDropdown(false);
  };

  const toggleOsDropdown = () => {
    setShowOsDropdown(!showOsDropdown);
    setShowBrandDropdown(false);
    setShowRamDropdown(false);
    setShowRomDropdown(false);
  };

  const selectBrand = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedBrands);
    setShowBrandDropdown(false);
  };

  const selectRam = (ram) => {
    const updatedRams = selectedRams.includes(ram)
      ? selectedRams.filter((selectedRam) => selectedRam !== ram)
      : [...selectedRams, ram];

    setSelectedRams(updatedRams);
    setShowRamDropdown(false);
  };

  const selectRom = (rom) => {
    const updatedRoms = selectedRoms.includes(rom)
      ? selectedRoms.filter((selectedRom) => selectedRom !== rom)
      : [...selectedRoms, rom];

    setSelectedRoms(updatedRoms);
    setShowRomDropdown(false);
  };

  const selectOs = (os) => {
    setSelectedOs(os);
    setShowOsDropdown(false);
  };

  const hideDropdowns = () => {
    setShowBrandDropdown(false);
    setShowRamDropdown(false);
    setShowRomDropdown(false);
    setShowOsDropdown(false);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark row">
      <Link className="navbar-brand col" to="/">
        Mobile System
      </Link>
      <div className="" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/mobiles">
              Mobiles
              <span className="badge badge-pill badge-secondary"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mobiles/add">
              New Mobile
              <span className="badge badge-pill badge-secondary"></span>
            </Link>
          </li>
          <li className={`nav-item dropdown ${showBrandDropdown ? "show" : ""}`}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="brandDropdown"
              role="button"
              onClick={toggleBrandDropdown}
            >
              Brand
            </a>
            <div
              className={`dropdown-menu ${showBrandDropdown ? "show" : ""}`}
              aria-labelledby="brandDropdown"
              onBlur={hideDropdowns}
            >
              {brands.map((brand, index) => (
                <Link
                  className={`dropdown-item ${selectedBrands.includes(brand) ? "active" : ""}`}
                  key={index}
                  to={`/mobiles?brand=${brand}`}
                  onClick={() => selectBrand(brand)}
                >
                  {brand}
                </Link>
              ))}
            </div>
          </li>

          <li className={`nav-item dropdown ${showRamDropdown ? "show" : ""}`}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="ramDropdown"
              role="button"
              onClick={toggleRamDropdown}
            >
              RAM
            </a>
            <div
              className={`dropdown-menu ${showRamDropdown ? "show" : ""}`}
              aria-labelledby="ramDropdown"
              onBlur={hideDropdowns}
            >
              {rams.map((ram, index) => (
                <Link
                  className={`dropdown-item ${selectedRams.includes(ram) ? "active" : ""}`}
                  key={index}
                  to={`/mobiles?ram=${ram}`}
                  onClick={() => selectRam(ram)}
                >
                  {ram}
                </Link>
              ))}
            </div>
          </li>
          <li className={`nav-item dropdown ${showRomDropdown ? "show" : ""}`}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="romDropdown"
              role="button"
              onClick={toggleRomDropdown}
            >
              ROM
            </a>
            <div
              className={`dropdown-menu ${showRomDropdown ? "show" : ""}`}
              aria-labelledby="romDropdown"
              onBlur={hideDropdowns}
            >
              {roms.map((rom, index) => (
                <Link
                  className={`dropdown-item ${selectedRoms.includes(rom) ? "active" : ""}`}
                  key={index}
                  to={`/mobiles?rom=${rom}`}
                  onClick={() => selectRom(rom)}
                >
                  {rom}
                </Link>
              ))}
            </div>
          </li>
          <li className={`nav-item dropdown ${showOsDropdown ? "show" : ""}`}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="osDropdown"
              role="button"
              onClick={toggleOsDropdown}
            >
              Operating Systems
            </a>
            <div
              className={`dropdown-menu ${showOsDropdown ? "show" : ""}`}
              aria-labelledby="osDropdown"
              onBlur={hideDropdowns}
            >
              {oss.map((os, index) => (
                <Link
                  className={`dropdown-item ${selectedOs === os ? "active" : ""}`}
                  key={index}
                  to={`/mobiles?os=${os}`}
                  onClick={() => selectOs(os)}
                >
                  {os}
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
