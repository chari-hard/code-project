import { EmblaCarousel } from '../../carrossel';
import './style.css'
import bannerMain from '../../../assets/images/banner-main.svg'

export const Main = () => {

    const bannersMain = [
        bannerMain, bannerMain, bannerMain
    ];


    return (

        <EmblaCarousel images={bannersMain} />

    )
}
