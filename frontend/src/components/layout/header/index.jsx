import './style.css'
import iconLupa from "../../../assets/images/iconlupa.svg"
import logoCode from "../../../assets/images/logoCode.svg"
import iconPerfil from "../../../assets/images/iconPerfil.svg"
import iconSacola from "../../../assets/images/SACOLATESTE.svg"

export const Header = () => {

    return (

        <>

        <div className="top-line">
                <p>20% OFF</p>
                
            </div>

        <header className="header">
            
            <button className="btn-search">
                <img src={iconLupa} alt="botão de pesquisa" />
            </button>

            <img src={logoCode} alt=" imagem com a logo" />


<div className="btns-kart-profile">

            <button className="btn-profile">
                <img src={iconSacola} alt="botão Perfil" />
            </button>

            <button className="btn-kart">
                <img src={iconPerfil} alt="botão Carrinho" />
             </button>

          

</div>

        </header>

        </>
    )

}