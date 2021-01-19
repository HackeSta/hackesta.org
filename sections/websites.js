import { IconCard, ImageCard } from "../components/card";
import Section from "../components/section";
import styles from "../styles/WebsiteBox.module.scss";
import classNames from "classnames";
const FEATURES = [
  {
    icon: ["fas", "money-bill-wave-alt"],
    title: "Low Cost",
    description:
      "Static Websites are very cost friendly. No Monthly / Annual recurring charges",
  },
  {
    icon: ["fas", "lock"],
    title: "Secure",
    description:
      "Static Websites are by design extremely secure. We also provide certified HTTPS with every website",
  },
  {
    icon: ["fas", "mobile-alt"],
    title: "Responsive",
    description:
      "Website appearance dynamically adjusts to every screen size and orientation",
  },
  {
    icon: ["fas", "palette"],
    title: "Themes",
    description:
      "We prefer to design websites ourself, but also support using exisiting designs from sites like HTML5UP.net or Templated.co",
  },
  {
    icon: ["fas", "search"],
    title: "SEO",
    description:
      "All the websites have complete SEO Configuration which includes social media sites like Facebook Sharing, Twitter Cards and search engines such as Google and DuckDuckGo",
  },
  {
          icon: ["fas","desktop"],
          title: "Progressive Web App",
          description: "Static Websites can be developed as a Progressive Web App, which behave like native apps on all platforms. They can also be published to different app stores."
  }
];
const WEBSITES = [
  {
    name: "CovidKashmir",
    url: "https://covidkashmir.org",
    image: "covidkashmir.png",
    pwa: true
  },
  {
    name: "Iftarkar",
    url: "https://iftarkar.com",
    image: "iftarkar.png",
    pwa: true
  },
  {
    name: "Blog - CovidKashmir",
    url: "https://blog.covidkashmir.org",
    image: "blog-covidkashmir.png",
  },
  {
    name: "Mehtab Palace",
    url: "https://mehtabpalace.in",
    image: "mehtabpalace.png",
  },
  {
    name: "Portfolio - Haider Ali Punjabi",
    url: "https://haideralipunjabi.com",
    image: "haideralipunjabi.png",
  },
  {
    name: "Blog - Haider Ali Punjabi",
    url: "https://blog.haideralipunjabi.com",
    image: "blog-haideralipunjabi.png",
  },
  {
    name: "HPFanfiction Recommender",
    url: "https://hpffrec.hackesta.org",
    image: "hpffrec.png",
    pwa: true
  },
  {
    name: "Tweet2Pic",
    url: "https://tweet2pic.js.org",
    image: "tweet2pic.png",
    pwa: true
  },
  {
    name: "Shadow - A Sigh of Relief",
    url: "https://shadowsighofrelief.com",
    image: "shadowsighofrelief.png"
  },
];
export default function Websites() {
  return (
    <Section id="websites" title="Static Websites">
      <h2 className="is-size-3 has-text-centered">Features</h2>
      <div className="container">
        <div className="columns is-centered is-multiline">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="column is-4">
              <IconCard icon={feature.icon}>
                <p className="title is-size-3 has-text-centered">
                  {feature.title}
                </p>
                <p className="subtitle is-size-5 mt-3 has-text-justified">
                  {feature.description}
                </p>
              </IconCard>
            </div>
          ))}
        </div>
      </div>
      <h2 className="is-size-3 has-text-centered my-6">Our Work - Progressive Web Apps</h2>
      <div className="container">
        <div className="columns is-centered is-multiline">
          {WEBSITES.filter(website=>website.pwa).map((website, idx) =>
            <div key={idx} className="column is-3">
              <WebsiteBox img={`websites/${website.image}`} alt={website.name} type="png" title={website.name} url={website.url}/>
            </div>
          )}
        </div>
      </div>
      <h2 className="is-size-3 has-text-centered my-6">Our Work - Static Websites</h2>
      <div className="container">
        <div className="columns is-centered is-multiline">
          {WEBSITES.filter(website=>!website.pwa).map((website, idx) =>
            <div key={idx} className="column is-3">
              <WebsiteBox img={`websites/${website.image}`} alt={website.name} type="png" title={website.name} url={website.url}/>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

function WebsiteBox({img,type,alt,title,url}){
        return(
                <div className={classNames(["box p-0 is-fullheight ",styles.websiteBox])}>
                <a className="my-a is-fullheight is-flex is-flex-direction-column is-justify-content-space-between" href={url} target="_blank" rel="noopener noreferrer">
                <figure className="image my-a">
                <picture>
                        <source type="image/webp" srcSet={require(`@public/images/${img}?resize&size=320&format=webp`)} />
                        <source type={`image/${type}`} srcSet={require(`@public/images/${img}?resize&size=320`)} />
                        <img height={1920} width={1080} src={require(`@public/images/${img}?resize&size=320`)} alt={alt}/>   
                </picture>
                <figcaption className="is-hidden-touch">
                        <h3 className="title is-size-3-widescreen is-size-5-desktop p-2 has-text-centered">{title}</h3>
                </figcaption>
                </figure>
                <h3 className="is-size-5 my-3 subtitle has-text-centered is-hidden-desktop">{title}</h3>
                </a>
                </div>
        )
}
