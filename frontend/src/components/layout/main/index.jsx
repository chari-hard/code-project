import './style.css'
import { Link } from 'react-router-dom';
import bannerMain from '../../../assets/images/banner-main.svg'

export const Main = () => {

    return (
        <main className='main'>
            <img src={bannerMain} alt=" Banner main " />
        </main>
    )
}