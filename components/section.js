
export default function Section({title,id,children}){
    return (
        <section key={id} id={id} className="section">
            <div className="container">
                <h1 className="title has-text-centered is-uppercase is-size-1">{title}</h1>
                <div className="container">
                    {children}
                </div>
            </div>
        </section>
    )
}