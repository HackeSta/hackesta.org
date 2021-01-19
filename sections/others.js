import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../components/section";

export default function Others(){
    return (
        <Section id="others" title="Other Work">
            <div className="container buttons are-medium is-flex is-flex-direction-column">
            <a href="https://instagram.com/hackesta" rel="noopener noreferrer" target="_blank" className="button is-primary is-rounded my-1">
                <span className="icon"><FontAwesomeIcon icon={["fab","instagram"]}/></span>
                <span>Instagram AR Effects</span>
            </a><br/>
            <a href="https://assistant.google.com/services/a/uid/00000096e7cd8357?hl=en" rel="noopener noreferrer" target="_blank" className="button is-primary is-rounded my-1">
                <span className="icon"><FontAwesomeIcon icon={["fab","google"]}/></span>
                <span><span className="is-hidden-mobile">Pearls of Speech - </span>OK Google Action</span>
            </a>
            </div>
        </Section>
    )
}