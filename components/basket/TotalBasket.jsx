import React from "react"
import styles from '../../styles/basket/Index.module.scss'
import { useDispatch, useSelector } from "react-redux"

const TotalBasket = () => {
    const { basketList, basketTotalAmount } = useSelector(state => state.basket)
    return (
        <div className={styles.totalBasketMain}>
            <div className={styles.titleMain}>
                <h5 className={styles.title}>Sepet Toplamı</h5>
            </div>
            <div className={styles.basketAmountMain}>
                <span className={styles.text}>Sepet Tutarı</span>
                <span className={styles.amount}>₺{parseFloat(basketTotalAmount).toFixed(2)}</span>
            </div>
        </div>
    )
}

export default TotalBasket