import './style.css'
import ImagemCamisa from '../../../assets/images/camisa-outdated.svg'
import ImagemCamisa2 from '../../../assets/images/camisa-pain.svg'
import ImagemCamisa3 from '../../../assets/images/camisa-raveparty.svg'
import ImagemCamisa4 from '../../../assets/images/camisa-human.svg'
import { Cardroupas } from '../../CARDS/cardroupas'

export const SectionLancamentos = () => {

    return (

        <div className='section-lancamentos'>

            <h2>LANÇAMENTOS</h2>

            <div className='container-lancamentos'>

                <div className='card-camisa'>
                    <Cardroupas
                    imagemRoupa={ ImagemCamisa }
                    nomeRoupa= "CAMISA OUTDATED"
                    descontoRoupa= "99,99"  
                    precoRoupa= "79,99"                 
                    />
                     
                </div>

                <div className='card-camisa'>
                    <Cardroupas
                    imagemRoupa={ ImagemCamisa2 }
                    nomeRoupa= "CAMISETA PAIN"
                    descontoRoupa= "99,99"  
                    precoRoupa= "79,99"                 
                    />
                     
                </div>

                <div className='card-camisa'>
                    <Cardroupas
                    imagemRoupa={ ImagemCamisa3 }
                    nomeRoupa= "CAMISETA RAVE PARTY "
                    descontoRoupa= "99,99"  
                    precoRoupa= "79,99"                 
                    />
                     
                </div>

                <div className='card-camisa'>
                    <Cardroupas
                    imagemRoupa={ ImagemCamisa4 }
                    nomeRoupa= "CAMISA HUMAN ARE GROSS"
                    descontoRoupa= "99,99"  
                    precoRoupa= "79,99"                 
                    />
                     
                </div>

            </div>

                <a className='btn-primary' href="">Ver mais</a>
        </div>
    )


}