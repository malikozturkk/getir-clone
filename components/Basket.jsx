import React from 'react'
import BasketSvg from "./assets/svg/homepage/basket.svg"
import styles from '../styles/Basket.module.scss'
import { useTranslation } from "react-i18next"

function Basket() {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
        <h5 className={styles.title}>{t('Basket.title')}</h5>
        <div className={styles.body}>
            <BasketSvg />
            <div className={styles.content}>
                <p className={styles.basketInfo}>{t('Basket.info')}</p>
                <p className={styles.addedProduct}>{t('Basket.text')}</p>
            </div>
        </div>
    </div>
  )
}

export default Basket