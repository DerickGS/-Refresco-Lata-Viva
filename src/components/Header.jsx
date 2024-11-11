import styles from "./Header.module.css"
import Logo_viva from "../assets/Refresco Lata Viva.png"

function Header() {
    return (
        <header>
            <div className={styles.desktop}>
                <img src={Logo_viva} className={styles.imgLogoViva} alt="Logo Refresco Viva" />
            </div>
        </header>
    );
}

export default Header