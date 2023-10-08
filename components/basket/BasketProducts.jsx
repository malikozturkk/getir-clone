import React, { useEffect } from "react"
import styles from '../../styles/basket/Index.module.scss'
import { useSelector, useDispatch } from "react-redux"
import Image from 'next/image'
import ProductCounter from "../assets/svg/homepage/productCounter.svg"
import DeleteBasket from "../assets/svg/homepage/deleteBasket.svg"
import DeleteProduct from "../assets/svg/homepage/deleteProduct.svg"
import { actionAddBasket, actionDeleteBasket, actionRemoveBasket } from '../../store/basket'
import Link from 'next/link'

const BasketProducts = ({ modal, showModal }) => {
    const dispatch = useDispatch()
    const { basketList, basketTotalAmount } = useSelector(state => state.basket)
    const { user } = useSelector(state => state.auth)
    useEffect(() => {
        if (basketTotalAmount <= 0 || !user) {
            window.location.pathname = '/'
        }
    }, [basketTotalAmount])
    const showClearModal = () => {
        showModal(true)
        const body = document.querySelector("body");
        body.classList.add("showClearBasketModal");
    }
    return (
        <div className={styles.basketMain}>
            <div className={styles.titleMain}>
                <h5 className={styles.title}>Sepetim</h5>
                <div className={styles.clearBasketMain}>
                    <div className={styles.clearBasketContainer}>
                        <button className={styles.clearBasket} onClick={() => showClearModal()}>
                            <div className={styles.clear}>
                                <DeleteBasket className={styles.icon} />
                            </div>
                            Sepeti temizle
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.productMain}>
                {basketList.map((basket, index) => (
                    <div className={styles.productContainer} key={index}>
                        <Link href={`/product/${basket?.id}`} className={styles.imageFigure}>
                            <div className={`${styles.productInfo} ${index === 0 && styles.firstInfo}`}>
                                <button className={styles.productButton}>
                                    <figure width="70px" height="70px" className={styles.productFigure}>
                                        <Image className={styles.image} src={`/products/${basket.images}`} width={68} height={68} alt={basket.name} />
                                    </figure>
                                    <div className={styles.infoMain}>
                                        <div className={styles.infoPrice}>
                                            <span className={styles.price}>{basket.priceText}</span>
                                        </div>
                                        <span className={styles.name}>{basket.name}</span>
                                        <div className={styles.infos}>
                                            <p className={styles.info}>{basket.shortDescription}</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </Link>
                        <div className={styles.counterMain}>
                            <div className={styles.deleteMain}>
                                <button className={styles.deleteButton} onClick={() => basket.basketItemCount > 1 ? dispatch(actionDeleteBasket(basket)) : dispatch(actionRemoveBasket(basket))}>
                                    {basket.basketItemCount > 1 ?
                                        <div className={styles.deleteProduct}>
                                            <DeleteProduct className={styles.deleteIcon} />
                                        </div>
                                        :
                                        <div className={styles.removeProduct}>
                                            <DeleteBasket className={styles.removeIcon} />
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
                                        <ProductCounter className={styles.icon} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BasketProducts