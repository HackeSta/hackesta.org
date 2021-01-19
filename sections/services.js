import { IconCard } from "../components/card"
import Section from "../components/section"

export default function Services(){
    return(
        <Section id="services" title="Services">
             <div className="columns is-centered is-multiline">
                        <div key="col1" className="column is-4">
                            <IconCard icon={["fas","globe-asia"]} buttons={{"Learn More":"/#websites"}}>
                                    <p className="title is-size-3 has-text-centered">Static Websites</p>
                                    <p className="subtitle is-size-5 mt-3 has-text-justified">Low cost, lightweight websites with 100% uptime, free HTTPS, huge bandwidth and many more features. Best suited for Portfolios, NGOs, Homestays,etc</p>
                            </IconCard>
                        </div>
                        <div key="col2" className="column is-4">
                            <IconCard icon={["fab","whatsapp"]}  buttons={{"See Example":"https://play.google.com/store/apps/details?id=org.hackesta.kashmiristickers"}}>
                                    <p className="title is-size-3 has-text-centered">Whatsapp Stickers</p>
                                    <p className="subtitle is-size-5 mt-3 has-text-justified">Get your Stickers published on Google Play Store</p>
                            </IconCard>
                        </div>
                        <div key="col3" className="column is-4">
                            <IconCard icon={["fab","instagram"]}  buttons={{"Our Instagram AR Effects":"https://instagram.com/hackesta"}}>
                                    <p className="title is-size-3 has-text-centered">Instagram Effects</p>
                                    <p className="subtitle is-size-5 mt-3 has-text-justified">Custom Instagram AR Effects to promote your brand on Instagram</p>
                            </IconCard>
                        </div>
                        <div key="col4" className="column is-4">
                            <IconCard icon={["fab","google"]}  buttons={{"See Example":"https://assistant.google.com/services/a/uid/00000096e7cd8357?hl=en"}}>
                                    <p className="title is-size-3 has-text-centered">OK Google</p>
                                    <p className="subtitle is-size-5 mt-3 has-text-justified">Interactive Bots on Google's Assistant Platform. Accessible using <i>OK Google</i> </p>
                            </IconCard>
                        </div>
                        <div key="col5" className="column is-4">
                            <IconCard icon={["fas","desktop"]}  buttons={{"Learn More":"/#websites"}}>
                                    <p className="title is-size-3 has-text-centered">Progressive Web Apps</p>
                                    <p className="subtitle is-size-5 mt-3 has-text-justified">Apps that are capable, reliable and installable on every platform.</p>
                            </IconCard>
                        </div>
                    </div>
        </Section>
    )
}

