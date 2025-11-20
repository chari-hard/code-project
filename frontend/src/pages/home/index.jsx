import './style.css'
import { Cardroupas } from  '../../components/CARDS/cardroupas'
import camisaTeste from '../../assets/images/camisa-outdated.svg'
import { Footer } from '../../components/layout/footer'
import { SemiFooter } from '../../components/layout/section-semi-footer'
import { SectionInverno } from '../../components/layout/section-inverno'

export const Home = () => {
    return(
        <>
            {/* Coloquem aqui seus layouts para testar. */}
            <SectionInverno/>
            <SemiFooter/>
            <Footer/>
        </>
    )
}