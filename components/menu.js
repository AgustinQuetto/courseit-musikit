import React from "react";
import "../styles/menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faSearch,
    faSwatchbook
} from "@fortawesome/free-solid-svg-icons";
import User from "./user";

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <img src={"/images/spotify-white-logo.png"} />
                <div className="section">
                    <ul>
                        <li className="active">
                            <FontAwesomeIcon icon={faHome} /> Inicio
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSearch} />
                            Buscar
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSwatchbook} />
                            Tu Biblioteca
                        </li>
                    </ul>
                </div>
                <div className="section">
                    <header>PLAYLISTS</header>
                    <ul>
                        <li className="add-playlist">
                            <div className="add-square">+</div>
                            <label>Crear playlist</label>
                        </li>
                        <li>Pop Argentina</li>
                    </ul>
                </div>
                <User />
            </div>
        );
    }
}

export default Menu;
