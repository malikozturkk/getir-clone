import React from 'react'
import BasketSvg from "./assets/svg/homepage/basket.svg"
import styles from '../styles/Basket.module.scss'

function Basket() {
  return (
    <div className={styles.container}>
        <h5 className={styles.title}>Sepetim</h5>
        <div className={styles.body}>
            <BasketSvg />
            <div className={styles.content}>
                <p className={styles.basketInfo}>Sepetiniz şu an boş</p>
                <p className={styles.addedProduct}>Sipariş vermek için sepetinize ürün ekleyin</p>
            </div>
        </div>
    </div>
  )
}

export default Basket