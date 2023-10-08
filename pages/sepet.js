import styles from '../styles/basket/Index.module.scss'
import BasketProducts from '../components/basket/BasketProducts'
import Address from '../components/basket/Address'
import TotalBasket from '../components/basket/TotalBasket'
import React from 'react'
import ClearBasketModal from '../components/basket/ClearBasketModal'

export default function Basket() {
    const [modal, showModal] = React.useState(false)
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <BasketProducts modal={modal} showModal={showModal} />
                    <div className={styles.infoMain}>
                        <Address />
                        <TotalBasket />
                        <div className={styles.basketButtonMain}>
                            <button className={styles.basketButton}>Ödemeye Geç</button>
                        </div>
                    </div>
                </div>
            </div>
            {modal && <ClearBasketModal modal={modal} showModal={showModal} />}
        </>
    )
}
