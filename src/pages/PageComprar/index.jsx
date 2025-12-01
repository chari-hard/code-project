import camisaOutdated from '../../assets/images/camisa-outdated.svg'
import sacolateste from '../../assets/images/SACOLATESTE.svg'
// import { CombinaCom } from '../../components/combinaCom'
import { Footer } from '../../components/layout/footer'

import './style.css'

export const PageComprar = () => {
    return (
        <>
            <div className='div-navegacao'>
                <nav>
                    <p>Página inicial</p>
                    <p>Ofertas</p>
                    <p>Coleção</p>
                </nav>
            </div>

            <section className='section-comprar-container'>
                <img src={camisaOutdated} alt="Camisa Outdated" />

                <div className='container-comprar'>
                    <div className='div-titulo'>
                        <h2>CAMISETA OVERSIZED ROSES GOOD VIBES</h2>
                    </div>

                    <div className="box-precos">
                        <div className="linha-preco">
                            <p className="preco-antigo">R$ 99,99</p>
                            <h2 className="preco-novo">R$ 79,99</h2>
                        </div>
                        <p className="parcelamento">Em até 2x sem juros</p>
                    </div>

                    <div className="container-tamanho-descricao">
                        {/* COLUNA ESQUERDA */}
                        <div className="coluna-esquerda">
                            {/* TAMANHO */}
                            <div className="tamanho-produto">
                                <p>Tamanho:</p>
                                <div className="opcoes-tamanho">
                                    <div className="tamanho-item"><p>P</p></div>
                                    <div className="tamanho-item"><p>M</p></div>
                                    <div className="tamanho-item"><p>G</p></div>
                                    <div className="tamanho-item"><p>GG</p></div>
                                </div>
                            </div>

                            {/* QUANTIDADE */}
                            <div className="quantidade-produto">
                                <p>Quantidade:</p>
                                <div className="quantidade-box">
                                    <button className="btn-qtd-menos">-</button>
                                    <span className="quantidade-valor">1</span>
                                    <button className="btn-qtd-mais">+</button>
                                </div>
                            </div>

                            {/* COR */}
                            <div className="cor-produto">
                                <p>Cor única:</p>
                                <span className="cor-unica"></span>
                            </div>
                        </div>

                        {/* DESCRIÇÃO */}
                        <div className="descricao-container">
                            <h4>DESCRIÇÃO</h4>
                            <p>
                                Camiseta preta oversized, feita em algodão leve com toque macio.
                                Estampa retrô-tech marcante e acabamento resistente. Ideal pra quem
                                vive o streetwear com atitude e não aceita ficar pra trás.
                            </p>
                        </div>
                    </div>

                    <div className="botoes-container"> <button className="btn-comprar"> Finalizar Comprar</button> <button 
                    className='btn-carrinho'> <img src={sacolateste} alt="icone de sacola" /> </button> </div>

                </div>
            </section>

            {/* <CombinaCom /> */}
            <Footer/>
        </>
    )
}
