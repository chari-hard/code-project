import './style.css';
import menuBermuda from '../../../assets/images/menu-bermudas.svg'
import menuCalca from '../../../assets/images/menu-calcas.svg'
import menuCamiseta from '../../../assets/images/menu-camisetas.svg'
import menuMoletons from '../../../assets/images/menu-moletons.svg'




export const SectionMenu = () => {
    return (

        <section className="section-menu">

            <h2>MENU</h2>

            <div className="container-menu">

                <div to="/bermudas" className="card-menu">
                    <img src={menuBermuda} alt="imagem de uma bermuda" />
                </div>

                <div to="/camisetas" className="card-menu">
                    <img src={menuCamiseta} alt="imagem de uma camisa" />
                </div>

                <div to="/calcas" className="card-menu">
                    <img src={menuCalca} alt="imagem de uma calca" />
                </div>

                <div to="/moletons" className="card-menu">
                    <img src={menuMoletons} alt="imagem de um moleton" />
                </div>


            </div>

        </section>

    )
}