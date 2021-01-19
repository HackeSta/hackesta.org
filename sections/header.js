import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SOCIALS = [
    {
        "name":"Facebook",
        "icon":["fab","facebook-f"],
        "link":"https://facebook.com/hackesta"
    },
    {
        "name":"Instagram",
        "icon":["fab","instagram"],
        "link":"https://instagram.com/hackesta"
    },
    {
        "name":"Twitter",
        "icon":["fab","twitter"],
        "link":"https://twitter.com/hackestaorg"
    },
    {
        "name":"Youtube",
        "icon":["fab","youtube"],
        "link":"https://www.youtube.com/channel/UCF-qoE_8k_aum76Rk7EWMIg"
    }
]
export default function Header(){
    return(
        <section id="home" className="hero is-dark">
            <div className="hero-body">
                <div className="my-6 container is-flex is-flex-direction-column is-align-items-center">
                    <div>
                        <img width={286} height={316} src={require("@public/logo.svg")} alt=""/>
                    </div>
                    <h1 className="title is-uppercase has-text-weight-light is-size-1 ">
                        Hackesta
                    </h1>
                    <h2 className="subtitle is-uppercase has-text-centered has-text-weight-light is-size-5 is-size-6-mobile">Idea | Inspiration | Implementation</h2>
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
                </div>
            </div>
        </section>
    )
}