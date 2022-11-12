import NavBar from '../../Components/NavBar/NavBar';
import './Landing.css'

const Landing = () => {
    return (
        <div>
            <section>
                <div className='section_container'>
                    <div className='top_title'>
                        <p>Feynman</p>
                    </div>
                    <div className='bottom_title'>
                        <p>Board</p>
                    </div>
                    <div className='subtext'>
                    <p>Type notes like you are coding, like.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Landing;