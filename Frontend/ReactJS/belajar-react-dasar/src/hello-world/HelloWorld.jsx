export default function HelloWorld(){
    const props = {
        deskripsi: "lorem lorem lorem lorem ipsum dolor sit amet"
    }
    return(
        <div>
            <HeaderHelloWorld text="halo dunia nyoba props"/>
            <ParaghrafHelloWorld {...props}/>
        </div>
    )
}



function HeaderHelloWorld({text = "default value"}){
    // const text = "halo dunia" // jika ini di nyalakan maka default value tergantikan
    return(
        <>
            <h1 style={{
                color: "red",
                backgroundColor: "aqua"
            }}>{text.toUpperCase()}</h1>
        </>
    )
}//jika tidak menggunakan destructuring maka tambahkan props.text, jika pakai maka langsung saja nama atributnya

// dua cara atas dan bawah 

function ParaghrafHelloWorld({deskripsi = "deskripsi default"}){
    const text = "halo Oktavari Budi Arief"
    // const deskripsi = "halo halo bandung"
    const style = {
        color: "green",
        backgroundColor: "black"
    }
    return (
        <>
            <p>{deskripsi} <b style={style}>{text.toLowerCase()}</b></p>
            
        </>
    )
}