const MyStyle = {
    "color":'red',
    "font-size":'30px',
    "font-weight":"700"
}

const handleClick = () =>{
    return(
        alert('tıklandı')
    )
} 
const MyComponent = () => {
    return(
        <>
        <h2 style={MyStyle}>İbrahim Gökyar</h2>
        <h4>İstanbul</h4>
        <h6 className="text">Full Stack Developer</h6>
        <br />
        <button onClick={handleClick}>Tıkla</button>
        <br />
        <img style={{width:"250px"}} alt="bilgisayar resmi"
        src="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU" />
        </>
    );
}

export default function ButtonClick() {
    return(
        <div className="App">
            <MyComponent />
        </div>
    )
}
