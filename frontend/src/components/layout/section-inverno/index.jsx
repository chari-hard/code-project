import './style.css'
import ImagemCamisa from '../../../assets/images/camisa-outdated.svg'
import { CardroupasBranco } from '../../CARDS/cardroupas-branco'

export const SectionInverno = () => {
    return(

        <section className="section-inverno">

            <h2>COLEÇÃO INVERNO</h2>

            <div className="container-inverno">

                <div className="card-camisa">
                    <CardroupasBranco
                        imagemRoupa = {ImagemCamisa}
                        nomeRoupa = "CAMISA teste"
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
        </section>
    )
}