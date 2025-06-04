import './HeroBannerBiblio.css'
import Banner from '../../../assets/imgs/HeroBannerBiblio.png'

function HeroBannerBiblio(){
    return(
        <div className='hero-banner-biblio'>
            <div className='hero-banner-biblio-text'>
                <h1>Tu Biblioteca</h1>
                <p>Donde la verdadera riqueza está entre estas estanterías.</p>
            </div>
            <div className='hero-banner-biblio-img'>
                <img src={Banner} alt="" />
            </div>
        </div>
    );
}

export default HeroBannerBiblio