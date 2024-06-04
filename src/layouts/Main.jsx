import TenisG from '../assets/tenisG.png'
import ButtonDigital from '../components/ButtonDigital';
import './main.css';

function Main() {
    return ( 
        <>
        
        <div>
            <img src={TenisG} alt="tenis" />
            
        </div>
        <div className='main'>
            <h3 >
                    Melhores ofertas personalizadas
                </h3>
                <h1>Queima de <br /> stoque  Nike 🔥</h1>
                <p>
                Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                </p>

                <ButtonDigital/>
        </div>
        </>
     );
}

export default Main;