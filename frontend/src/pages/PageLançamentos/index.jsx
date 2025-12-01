import { Cardroupas } from '../../components/CARDS/cardroupas'
import ImagemCamisa from '../../assets/images/camisa-outdated.svg'
import ImagemCamisa2 from '../../assets/images/camisa-pain.svg'
import ImagemCamisa3 from '../../assets/images/camisa-raveparty.svg'
import ImagemCamisa4 from '../../assets/images/camisa-human.svg'
import './style.css'



const listaDeRoupas = [
    {
        imagemRoupa: { ImagemCamisa },
        nomeRoupa: "CAMISA OUTDATED",
        descontoRoupa: "99,99",
        precoRoupa: "79,99"
    },

    {
        imagemRoupa: { ImagemCamisa2 },
        nomeRoupa: "CAMISETA PAIN",
        descontoRoupa: "99,99",
        precoRoupa: "79,99"
    },

    {
        imagemRoupa: { ImagemCamisa3 },
        nomeRoupa: "CAMISETA RAVE PARTY",
        descontoRoupa: "99,99",
        precoRoupa: "79,99"
    },

    {
        imagemRoupa: { ImagemCamisa4 },
        nomeRoupa: "CAMISA HUMAN ARE GROSS",
        descontoRoupa: "99,99",
        precoRoupa: "79,99"
    }
]

export const PageLancamentos = () => {

    return (
        <>
            <div className='linha-de-sessoes'>
                <a href="">Página inicial</a>
                <a href="">Ofertas</a>
                <a href="">Coleção</a>
            </div>

            <h2 className='h2-lancamentos'>Camisetas</h2>

            <div className='container-section-lancamentos'>

                {listaDeRoupas.map(({ imagemRoupa, nomeRoupa, descontoRoupa, precoRoupa }) => (
                    <Cardroupas
                        imagemRoupa={imagemRoupa}
                        nomeRoupa={nomeRoupa}
                        descontoRoupa={descontoRoupa}
                        precoRoupa={precoRoupa}
                    />
                ))}


            </div>


        </>
    )

}
