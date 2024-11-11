import styles from "./Home.module.css"
import Header from "../components/Header";

function Home() {
    return (
        <body>
            <Header/>
            <main>  
                <section className={styles.bannerPrincipal}>
                    <div className={styles.glassCard}>
                        <h1 className={styles.bannerTitle}>Refresque-se com Saúde e Sabor!</h1>
                    </div>
                </section>
                <section className={styles.cardCans}>
                    <div className={styles.card}>
                        <div className={styles.imgCan}></div>
                        <div className={styles.desc}>
                            <h2>Lata Viva Limão com Gengibre</h2>
                            <p>Refrescante e levemente picante, perfeita para os dias quentes.</p>
                            <button className={styles.buyButton}>Experimente Agora</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imgCan}></div>
                        <div className={styles.desc}>
                            <h2>Lata Viva Maracujá Tropical</h2>
                            <p>Um toque de tropicalidade e doçura natural em cada gole.</p>
                            <button className={styles.buyButton}>Experimente Agora</button>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imgCan}></div>
                        <div className={styles.desc}>
                            <h2>Lata Viva Chá Verde com Frutas</h2>
                            <p>Uma mistura revitalizante de chá verde e frutas, ideal para momentos de relaxamento.</p>
                            <button className={styles.buyButton}>Experimente Agora</button>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    );
}

export default Home