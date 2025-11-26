import './style.css'
import BannerDesconto from '../../../assets/images/banner-ofertas.svg'
import ImagemCamisa from '../../../assets/images/camisa-outdated.svg'
import { Cardroupas } from '../../CARDS/cardroupas'

export const SectionOfertas = () => {

    return (

        <div className='section-ofertas'>


            <div className='bannerComSale'>

                <img className='imagemOfertas' src={BannerDesconto} alt="" />
                <h2>SALE <span className='highlighted-word'>20%</span> OFF</h2>

            </div>

            <div className='containter-ofertas-h2'>

                <h2>OFERTAS</h2>

                <div className='container-ofertas'>


                    <div className='card-camisa'>
                        <Cardroupas
                            imagemRoupa={ImagemCamisa}
                            nomeRoupa="CAMISA OUTDATED"
                            descontoRoupa="99,99"
                            precoRoupa="79,99"
                        />

                    </div>

                    <div className='card-camisa'>
                        <Cardroupas
                            imagemRoupa={ImagemCamisa}
                            nomeRoupa="CAMISA OUTDATED"
                            descontoRoupa="99,99"
                            precoRoupa="79,99"
                        />

                    </div>

                    <div className='card-camisa'>
                        <Cardroupas
                            imagemRoupa={ImagemCamisa}
                            nomeRoupa="CAMISA OUTDATED"
                            descontoRoupa="99,99"
                            precoRoupa="79,99"
                        />

                    </div>

                    <div className='card-camisa'>
                        <Cardroupas
                            imagemRoupa={ImagemCamisa}
                            nomeRoupa="CAMISA OUTDATED"
                            descontoRoupa="99,99"
                            precoRoupa="79,99"
                        />

                    </div>

                </div>

            </div>
        </div>

    )
}