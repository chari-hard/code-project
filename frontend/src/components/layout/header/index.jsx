import './style.css'
import iconLupa from "../../../assets/images/iconlupa.svg"
import logoCode from "../../../assets/images/logoCode.svg"
import iconPerfil from "../../../assets/images/iconPerfil.svg"
import iconSacola from "../../../assets/images/SACOLATESTE.svg"
import { Link } from 'react-router-dom'

export const Header = () => {

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

                    <a className="btn-kart">
                        <img src={iconSacola} alt="botão de carrinho" />
                    </a>

                    <Link to="/login" className="btn-profile">
                        <img src={iconPerfil} alt="botão de perfil" />
                    </Link>

                </div>

            </header>

        </div>
    )

}