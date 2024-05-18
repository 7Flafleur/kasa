import Flogo from "../assets/Flogo.png"

export default function Footer() {
    return(
        <footer className="footer">
            <div className="logocontainer">
                <img className="Flogo" src={Flogo} alt="" />
                <p className="kasa">© 2020 Kasa. All rights reserved</p>
            </div>
            </footer>
    )

}