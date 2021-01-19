import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageCard } from "../components/card";
import Section from "../components/section";

const APPS = [
    {
        "title": "Tweet2Pic",
        "image": "tweet2pic.png",
        "link": "https://play.google.com/store/apps/details?id=org.hackesta.tweet2pic"
    },
    {
        "title": "Iftarkar",
        "image": "iftarkar.png",
        "link": "https://play.google.com/store/apps/details?id=org.hackesta.iftarkar"
    },
    {
        "title": "Kashmiri Stickers",
        "image": "kashmiristickers.png",
        "link": "https://play.google.com/store/apps/details?id=org.hackesta.kashmiristickers"
    }
]
export default function Android(){
    return(
        <Section id="android" title="Android Apps">
        <div className="container">
                <div className="columns is-centered is-multiline">
                {APPS.map((app, idx) => (
                    <div key={idx} className="column is-3">
                    <ImageCard height={256} width={256} img={`android/${app.image}`} type="png" alt={app.title} buttons={{"View on Play Store":app.link}}>
                        <p className="title is-size-3 has-text-centered">
                        {app.title}
                        </p>
                    </ImageCard>
                    </div>
                ))}
                <div key="outlink" className="column has-text-centered is-12">
                    <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/developer?id=Hackesta" className="button is-rounded is-medium is-primary"><span className="icon"><FontAwesomeIcon icon={["fab","google-play"]}/></span><span>Visit our Play Store Profile</span></a>
                </div>
                </div>
        </div>
        </Section>
    )
}