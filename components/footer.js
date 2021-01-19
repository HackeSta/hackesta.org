import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function Footer(){
   return (
    <footer className="footer has-text-light mt-a">
    <div className="content has-text-centered">
    <p className="is-size-6">
          Made with{" "}
          <FontAwesomeIcon
            style={{ color: "red" }}
            className="mx-2"
            icon={["fas", "heart"]}
          />{" "}
          by{" "}
          <a
            href="https://hackesta.org"
            target="_blank"
            rel="noopener noreferrer"
            alt="Hackesta"
          >
            Hackesta
          </a>{" "}
          | 
          <a href="https://www.buymeacoffee.com/HAliPunjabi" target="_blank" rel="noopener noreferrer" alt="Buy Me a Coffee">
            <FontAwesomeIcon
            className="mx-2"
            icon={["fas","mug-hot"]}/>Buy Me a Coffee
          </a>
          | © Hackesta {new Date().getFullYear()}
        </p>
    </div>
  </footer>
   )
}