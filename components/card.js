import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import  classNames  from  "classnames"
export function IconCard({icon,children,buttons}){
    return(
        <div className="card">
            <div className="card-image has-text-centered p-6">
                <FontAwesomeIcon className="has-text-primary" style={{fontSize: "10rem"}} icon={icon} />
            </div>
            <div className="card-content">
                {children}
            </div>
            {
                buttons &&
                <footer className="card-footer">
                {
                    Object.entries(buttons).map((button,idx)=><a key={idx} href={button[1]} className="card-footer-item">{button[0]}</a>)
                }
                </footer>
            }
        </div>
    )
}
export function ImageCard({img,alt,type,children,buttons,isRounded,width,height}){
    return(
        <div className="card">
            <div className="card-image has-text-centered">
                {

                    <picture>
                        <source type="image/webp" srcSet={require(`@public/images/${img}?resize&size=320&format=webp`)} />
                        <source type={`image/${type}`} srcSet={require(`@public/images/${img}?resize&size=320`)} />
                        <img width={width?width:null} height={height?height:null} className={classNames("p-2",{"is-rounded":isRounded})} src={require(`@public/images/${img}?resize&size=320`)} alt={alt}/>         
                    </picture>
                }
            </div>
            <div className="card-content">
                {children}
            </div>
            {
                buttons &&
                <footer className="card-footer">
                    {
                        Object.entries(buttons).map((button,idx)=><a key={idx} href={button[1]} className="card-footer-item">{button[0]}</a>)
                    }
                </footer>
            }
        </div>
    )
}