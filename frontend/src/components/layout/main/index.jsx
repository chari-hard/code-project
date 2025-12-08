import { EmblaCarousel } from '../../carrossel';
import './style.css'
import bannerMain from '../../../assets/images/banner-main.svg'
import bannerPromo from '../../../assets/images/banner-promocao.svg'

export const Main = () => {

    const bannersMain = [
        bannerMain, bannerPromo, bannerMain
    ];


    return (

        <EmblaCarousel images={bannersMain} />

    )
}
