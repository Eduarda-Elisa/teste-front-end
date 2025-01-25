import styles from "./CategoryCard.module.scss"

export function CategoryCard (){
    return (
        <section className={styles.category}>
            <div className={styles.container}>
                <div className={styles.technology}>
                    <button><img src="/assets/images/tecnology.png" alt="" /></button>
                    <p>Tecnologia</p>
                </div>

                <div className={styles.supermarket}>
                    <button><img src="/assets/images/supermarket.png" alt="" /></button>
                    <p>Supermercado</p>
                </div>

                <div className={styles.drinks}>
                    <button><img src="/assets/images/drink.png" alt="" /></button>
                    <p>Bebidas</p>
                </div>

                <div className={styles.tool}>
                    <button><img src="/assets/images/tool.png" alt="" /></button>
                    <p>Ferramentas</p>
                </div>

                <div className={styles.health}>
                    <button><img src="/assets/images/health.png" alt="" /></button>
                    <p>Saúde</p>
                </div>

                <div className={styles.sports}>
                    <button><img src="/assets/images/sports.png" alt="" /></button>
                    <p>Esportes e Fitnes</p>
                </div>

                <div className={styles.fashion}>
                    <button><img src="/assets/images/fashion.png" alt="" /></button>
                    <p>Moda</p>
                </div>
            </div>
        </section>
    )
}