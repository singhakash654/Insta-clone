import "./header.css"
const Header = ()=> {
    return (
        <>
            <nav className="header">
                <section className="logo">
                    <img src={require("../../images/logo.png")} alt="logo" />
                </section>
                 <section className="camera-icon" >
                    <img src={require("../../images/camera2.png")} alt="camera" />
                 </section>
                 
            </nav>
        </>
    )
}
export default Header;