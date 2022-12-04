import React from 'react'
import past from "../styles/homepage/PastOrders.module.scss"
import Home from "./assets/svg/header/home.svg"
import Basket from "./assets/svg/header/basket.svg"

function PastOrders() {
  return (
    <div className={past.container}>
      <div className={past.title}>
        <h5 className={past.text}>Geçmiş Siparişlerim</h5>
      </div>
      <div className={past.main}>
      <div className={past.order}>
          <button className={past.orderButton}>
            <div className={past.orderMain}>
              <div className={past.icons}>
                <Home className={past.icon} />
              </div>
              <div className={past.info}>
                <time className={past.time}>5 Kas 2022 20:54</time>
                <div className={past.orderInfo}>
                  <address className={past.address}>Ev</address>
                </div>
              </div>
              <div className={past.amountMain}>
                <article className={past.amountArticle}>
                  <figure className={past.basket}>
                    <Basket className={past.basketIcon} />
                  </figure>
                  <span className={past.amount}>₺999,99</span>
                </article>
              </div>
            </div>
          </button>
        </div>
        <div className={past.order}>
          <button className={past.orderButton}>
            <div className={past.orderMain}>
              <div className={past.icons}>
                <Home className={past.icon} />
              </div>
              <div className={past.info}>
                <time className={past.time}>31 Eki 2022 21:21</time>
                <div className={past.orderInfo}>
                  <address className={past.address}>Ev</address>
                </div>
              </div>
              <div className={past.amountMain}>
                <article className={past.amountArticle}>
                  <figure className={past.basket}>
                    <Basket className={past.basketIcon} />
                  </figure>
                  <span className={past.amount}>₺287,54</span>
                </article>
              </div>
            </div>
          </button>
        </div>
        <div className={past.all}>
          <button className={past.allButton}>Tümünü Gör</button>
        </div>
      </div>
    </div>
  )
}

export default PastOrders