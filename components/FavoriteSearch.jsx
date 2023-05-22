import React from 'react'
import styles from "../styles/layout/FavoriteSearch.module.scss"

const FavoriteSearch = () => {
    const favoriteProduct =
        [
            {
                "id": 1,
                "name": "dondurma"
            },
            {
                "id": 2,
                "name": "ekmek"
            },
            {
                "id": 3,
                "name": "yumurta"
            },
            {
                "id": 4,
                "name": "tavuk"
            },
            {
                "id": 5,
                "name": "soda"
            },
            {
                "id": 6,
                "name": "patates"
            },
            {
                "id": 7,
                "name": "kahve"
            },
            {
                "id": 8,
                "name": "kaşar"
            },
            {
                "id": 9,
                "name": "domates"
            },
            {
                "id": 10,
                "name": "krema"
            }
        ]
    return (
        <div className={styles.favoriteSearch}>
            <div className={styles.container}>
                <div className={styles.main}>
                    <h6 className={styles.title}>Popüler Aramalar</h6>
                    <div className={styles.favotiteProducts}>
                        {favoriteProduct.map((product, index) => {
                            return (
                                <div className={styles.productMain} key={index}>
                                    <button className={styles.productButton}>
                                        <div className={styles.name}>{product.name}</div>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteSearch