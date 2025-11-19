import './style.css'
import imagemCarrinho from '../../../assets/images/material-symbols-light_shopping-bag-outline.svg'

export const Cardroupas = ({imagemRoupa, nomeRoupa, descontoRoupa, precoRoupa}) => {
    return(
        <div className='cardroupa'>
            <img src={imagemRoupa} alt={nomeRoupa}/>


            <div className='roupa-content'>
                <div>
                    <p className='nome-roupa'>{nomeRoupa}</p>

                    <div>
                        <p className='discount-roupa'>{descontoRoupa}</p>
                        <p className='prize-roupa'>{precoRoupa}</p>
                    </div>
                </div>

                <img src={imagemCarrinho} alt="" />
            </div>
        </div>
    )
}
