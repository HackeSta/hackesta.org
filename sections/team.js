import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageCard } from "../components/card";
import Section from "../components/section";
const SOCIALS = [
    {
        "name": "Website",
        "icon":["fas","globe-asia"],
        "link":"https://haideralipunjabi.com"
    },
    {
        "name": "Instagram",
        "icon":["fab","instagram"],
        "link":"https://instagram.com/haideralipunjabi"
    },
    {
        "name": "Twitter",
        "icon":["fab","twitter"],
        "link":"https://twitter.com/HAliPunjabi"
    },
    {
        "name":"Github",
        "icon":["fab","github"],
        "link":"https://github.com/haideralipunjabi"
    }
]
export default function Team(){
    return(
        <Section id="team" title="Our Team" >
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-3">
                            <ImageCard height={256} width={256} img="profile.png" isRounded type="png" alt="Haider Ali Punjabi">
                                <p className="title has-text-centered is-size-3">Haider Ali Punjabi</p>
                                <ul className="is-flex is-justify-content-center" style={{width:"100%"}}>
                            {
                                SOCIALS.map((social,idx)=>
                                <li className="mx-3" key={idx}>
                                    <a href={social.link} aria-label={social.name} target="_blank" rel="noopener noreferrer" className="is-size-4">
                                        <span className="icon"><FontAwesomeIcon icon={social.icon}/></span>
                                    </a>
                                </li>
                                )
                            }
                           
                        </ul>
                            </ImageCard>
                    </div>
                </div>
            </div>
        </Section>
    )
}