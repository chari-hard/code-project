import './style.css'
import imagemCarrinho from '../../../assets/images/icon-sacola.svg'

export const Cardroupas = ({imagemRoupa, nomeRoupa, descontoRoupa, precoRoupa}) => {
    return(
        <div className='cardroupa'>
            <img src={imagemRoupa} alt={nomeRoupa}/>


            <div className='roupa-content'>
                <div>
                    <p className='nome-roupa'>{nomeRoupa}</p>

                    <div className='prizes'>
                        <p className='discount-roupa'>R${descontoRoupa}</p>
                        <p className='prize-roupa'>R${precoRoupa}</p>
                    </div>
                </div>

                <img src={imagemCarrinho} alt="carrinho" />
            </div>
        </div>
    )
}
