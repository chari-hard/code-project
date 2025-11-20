import './style.css'
import ImagemCamisa from '../../../assets/images/camisa-outdated.svg'
import { CardroupasBranco } from '../../CARDS/cardroupas-branco'

export const SectionInverno = () => {
    return(

        <div className="section-inverno">

            <h2>COLEÇÃO INVERNO</h2>

            <div className="container">

                <div className="card-camisa">
                    <CardroupasBranco
                        imagemRoupa = {ImagemCamisa}
                        nomeRoupa = "CAMISA OUTDATED"
                        descontoRoupa = "99,99"
                        precoRoupa = "79,99"
                    />
                </div>
                <div className="card-camisa">
                    <CardroupasBranco
                        imagemRoupa = {ImagemCamisa}
                        nomeRoupa = "CAMISA OUTDATED"
                        descontoRoupa = "99,99"
                        precoRoupa = "79,99"
                    />
                </div>
                <div className="card-camisa">
                    <CardroupasBranco
                        imagemRoupa = {ImagemCamisa}
                        nomeRoupa = "CAMISA OUTDATED"
                        descontoRoupa = "99,99"
                        precoRoupa = "79,99"
                    />
                </div>
                <div className="card-camisa">
                    <CardroupasBranco
                        imagemRoupa = {ImagemCamisa}
                        nomeRoupa = "CAMISA OUTDATED"
                        descontoRoupa = "99,99"
                        precoRoupa = "79,99"
                    />
                </div>

            </div>
        </div>
    )
}