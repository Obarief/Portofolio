export default function Container({children}){ // nested component
    const style = {
        fontWeight: "bold"
    }
    return(
        <div>
            <h1>Oktavari Budi Arief</h1>
            {children}
            <p style={style}>Belajar ReactJS</p>
        </div>
    )
}