import React from 'react'
import info from "../styles/homepage/InfoWrapper.module.scss"
import DeliveryFee from "./assets/svg/info/deliveryFee.svg"
import MinimumAmount from "./assets/svg/info/minimumAmount.svg"
import { useTranslation } from "react-i18next"

function infoWrapper() {
    const { t } = useTranslation()
  return (
    <div className={info.main}>
        <div className={info.info}>
            <div className={info.bringInfo}>
                <div className={info.minimumAmount}>
                    <figure className={info.minimumAmountFigure}>
                        <MinimumAmount className={info.logo} />
                    </figure>
                    <div className={info.amount}>
                        <span className={info.text}>{t('HeaderInfo.minBasket')}</span>
                        <span className={info.amountInfo}>₺60,00</span>
                    </div>
                </div>
                <div className={info.deliveryFee}>
                    <figure className={info.deliveryFeeFigure}>
                        <DeliveryFee className={info.logo} />
                    </figure>
                    <div className={info.amount}>
                        <span className={info.text}>{t('HeaderInfo.delivery')}</span>
                        <span className={info.amountInfo}>₺0,00 - ₺16,99</span>
                    </div>
                </div>
            </div>
        </div>
        <figure className={info.mapFigure}>
            <img className={info.map} src="https://cdn.getir.com/getirweb-images/common/static-map.png" />
        </figure>
    </div>
  )
}

export default infoWrapper