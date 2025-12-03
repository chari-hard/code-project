import './style.css'
import iconLupa from "../../../assets/images/iconlupa.svg"
import logoCode from "../../../assets/images/logoCode.svg"
import iconPerfil from "../../../assets/images/iconPerfil.svg"
import iconSacola from "../../../assets/images/SACOLATESTE.svg"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from "@mui/material";
import OffCanvasCarrinho from "../../MODALS/offcanvas";



export const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const menuItems = [
        { label: "Home", onClick: () => console.log("Home") },
        { label: "Perfil", onClick: () => console.log("Perfil") },
        { label: "Configurações", onClick: () => console.log("Configurações") },
    ];

    return (
        <div>

            <div className="top-line">
                <p>20% OFF</p>
                <p>20% OFF</p>
                <p>20% OFF</p>
                <p>20% OFF</p>
                <p>20% OFF</p>
            </div>

            <header className="header">


                <button className="btn-search">

                    <img src={iconLupa} alt="botão de pesquisa" />
                </button>

                <Link to="./">
                    <img src={logoCode} alt=" imagem com a logo" />
                </Link>


                <div className="btns-kart-profile">

                    <button className="btn-kart" onClick={() => setDrawerOpen(true)}>
                        <img src={iconSacola} alt="botão de carrinho" />
                    </button>

                    <Link to="/login" className="btn-profile">
                        <img src={iconPerfil} alt="botão de perfil" />
                    </Link>

                </div>

            </header>

            <OffCanvasCarrinho
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                items={menuItems}
            />
        </div>
    )

}