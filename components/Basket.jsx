import React from 'react'
import BasketSvg from "./assets/svg/homepage/basket.svg"
import styles from '../styles/Basket.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { actionAddBasket, actionDeleteBasket, actionRemoveBasket } from '../store/basket'
import { useTranslation } from "react-i18next"
import ProductCounter from "./assets/svg/homepage/productCounter.svg"
import DeleteBasket from "./assets/svg/homepage/deleteBasket.svg"
import DeleteProduct from "./assets/svg/homepage/deleteProduct.svg"

function Basket() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { basketList, basketTotalAmount } = useSelector(state => state.basket)
  console.log(basketList, 'basketList')
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>{t('Basket.title')}</h5>
      {basketList.length > 0 ?
        <div className={styles.cardWrapper}>
          <div className={styles.wrapperMain}>
            <article className={styles.wrapper}>
              <div className={styles.main}>
                {basketList.map((basket, index) => (
                  <div className={styles.productMain} key={index}>
                    <div className={styles.productInfo}>
                      <span className={styles.productName}>{basket.name}</span>
                      <span className={styles.productPrice}>{basket.priceText}</span>
                    </div>
                    <div className={styles.counterMain}>
                      <div className={styles.deleteMain}>
                        <button className={styles.deleteButton} onClick={() => basket.basketItemCount > 1 ? dispatch(actionDeleteBasket(basket)) : dispatch(actionRemoveBasket(basket))}>
                          {basket.basketItemCount > 1 ?
                            <div className={styles.deleteProduct}>
                              <DeleteProduct />
                            </div>
                            :
                            <div className={styles.removeProduct}>
                              <DeleteBasket />
                            </div>
                          }
                        </button>
                      </div>
                      <div className={styles.productPieceMain}>
                        <div className={styles.productPiece}>{basket.basketItemCount}</div>
                      </div>
                      <div className={styles.addMain}>
                        <button className={styles.addButton} onClick={() => dispatch(actionAddBasket(basket))}>
                          <div className={styles.addProduct}>
                            <ProductCounter />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.goToCartMain}>
                <button className={styles.gotToCart}>Sepete git</button>
                <div className={styles.totalPrice}>₺{basketTotalAmount}</div>
              </div>
            </article>
          </div>
        </div>
        :
        <div className={styles.body}>
          <BasketSvg />
          <div className={styles.content}>
            <p className={styles.basketInfo}>{t('Basket.info')}</p>
            <p className={styles.addedProduct}>{t('Basket.text')}</p>
          </div>
        </div>
      }
    </div>
  )
}

export default Basket