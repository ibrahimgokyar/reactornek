const MyStyle = {
    "color":'red',
    "font-size":'30px',
    "font-weight":"700"
}
const MyComponent = () => {
    return(
        <>
        <h2 style={MyStyle}>İbrahim Gökyar</h2>
        <h4>İstanbul</h4>
        <h6 className="text">Full Stack Developer</h6>
        </>
    );
}

export default function InlineCss() {
    return(
        <div className="App">
            <MyComponent />
        </div>
    )
}