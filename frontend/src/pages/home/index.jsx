import './style.css'
import { SemiFooter } from '../../components/layout/section-semi-footer'
import { SectionInverno } from '../../components/layout/section-inverno'
import { SectionLancamentos } from '../../components/layout/section-lancamentos'
import { SectionOfertas } from '../../components/layout/section-ofertas'
import { Main } from '../../components/layout/main'
import { SectionMenu } from '../../components/layout/section-menu'

export const Home = () => {
    return(
        <>
            <Main/>
            <SectionLancamentos/>
            <SectionMenu/>
            <SectionOfertas/>
            <SectionInverno/>
            <SemiFooter/>
        </>
    )
}
