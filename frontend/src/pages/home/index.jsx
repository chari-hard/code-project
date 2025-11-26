import './style.css'
import { Cardroupas } from  '../../components/CARDS/cardroupas'
import camisaTeste from '../../assets/images/camisa-outdated.svg'
import { Footer } from '../../components/layout/footer'
import { SemiFooter } from '../../components/layout/section-semi-footer'
import { SectionInverno } from '../../components/layout/section-inverno'
import { SectionLancamentos } from '../../components/layout/section-lancamentos'
import { SectionOfertas } from '../../components/layout/section-ofertas'

export const Home = () => {
    return(
        <>
            {/* Coloquem aqui seus layouts para testar. */}
            <SectionLancamentos/>
            <SectionOfertas/>
            <SectionInverno/>
            <SemiFooter/>
            <Footer/>
        </>
    )
}