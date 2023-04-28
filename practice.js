import 'bulma/css/bulma.css';
import ProfileCard from './profileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
function App() {
    return (
        <div>
            <div>Personal Digital Assistant PDA </div>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-2">
                        <ProfileCard title= "Alexa" handle= "@alexa" image= {AlexaImage}/>
                        </div>
                        <div className="column is-2">
                        <ProfileCard title= "Siri" handle= "@siri" image= {CortanaImage}/>
                        </div>
                        <div className="column is-2">
                        <ProfileCard title= "Cortana" handle= "@cortana" image= {SiriImage}/>
                        </div>
                    </div>
                </section>
            </div>
            
        </div>
    );
}
export default App;