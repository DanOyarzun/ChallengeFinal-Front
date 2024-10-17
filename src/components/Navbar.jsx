import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import "../assets/css/Products.css"

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
        <img src="src\assets\img\logo-ecommerce.png" alt="Logo-TodoCOmpras" className="logo" />
          TodoCompras
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="input-group-text" id="basic-addon2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/751/751381.png"
                  alt="Buscar"
                  className="custom-search"
                />
              </button>
            </div>
          </form>
          <ul className="navbar-nav ms-auto"> {/* Ajusta aquí para alinear el menú a la derecha */}
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/productos">
                    Productos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/carrito">
                    Carrito
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Logout setIsAuthenticated={setIsAuthenticated} />
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/registrarse">
                    Registrate
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Iniciar sesión
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
