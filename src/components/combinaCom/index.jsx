import './style.css'
import iconSacola from '../../assets/images/iconSacola.svg'
import calcaBege from '../../assets/images/calcaBege.svg'
import calcaPreta from '../../assets/images/calcaPreta.svg'
import bermudaPreta from '../../assets/images/bermudaPreta.svg'
import bermudamusgo from '../../assets/images/bermudamusgo.svg'


export const CombinaCom = ({imagemRoupa, nomeRoupa, descontoRoupa, precoRoupa}) => {

 
    return(
       <>

       <h2 className='titulo-combinacom'>Combina com</h2>
       
       <div className='container-cards'>
            <div className='cardroupa'>
                        <img src={calcaBege} alt={nomeRoupa}/>
            
            
                        <div className='roupa-content'>
                            <div>
                                <p className='nome-roupa'>CALÇA CARGO CODE BEGE</p>
            
                                <div className='prizes'>
                                    <p className='discount'>R$ 119,99</p>
                                    <p className='prize'>R$ 99,99</p>
                                </div>
                            </div>
            
                            <img src={iconSacola} alt="carrinho" />
                        </div>
                    </div>

                     <div className='cardroupa'>
                        <img src={calcaPreta} alt={nomeRoupa}/>
            
                        <div className='roupa-content'>
                            <div>
                                <p className='nome-roupa'>CALÇA CARGO CODE PRETA</p>
            
                                <div className='prizes'>
                                    <p className='discount'>R$ 119,99</p>
                                    <p className='prize'>R$ 99,99</p>
                                </div>
                            </div>
            
                            <img src={iconSacola} alt="carrinho" />
                        </div>
                    </div>


                     <div className='cardroupa'>
                        <img src={bermudaPreta} alt={nomeRoupa}/>
            
            
                        <div className='roupa-content'>
                            <div>
                                <p className='nome-roupa'>BERMUDA CARGO CODE DARK</p>
            
                                <div className='prizes'>
                                    <p className='discount'>R$ 119,99</p>
                                    <p className='prize'>R$ 99,99</p>
                                </div>
                            </div>
            
                            <img src={iconSacola} alt="carrinho" />
                        </div>
                    </div>


                     <div className='cardroupa'>
                        <img src={bermudamusgo} alt={nomeRoupa}/>
            
            
                        <div className='roupa-content'>
                            <div>
                                <p className='nome-roupa'>BERMUDA CARGO CODE MUSGO</p>
            
                                <div className='prizes'>
                                    <p className='discount'>R$ 119,99</p>
                                    <p className='prize'>R$ 99,99</p>
                                </div>
                            </div>
            
                            <img src={iconSacola} alt="carrinho" />
                        </div>
                    </div>
                    </div>
        </>

    )


}