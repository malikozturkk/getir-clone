import React from 'react'
import styles from "../styles/layout/ProductList.module.scss"
import ProductCounter from "./assets/svg/homepage/productCounter.svg"
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { actionAddBasket, actionBasketItemCount } from '../store/basket'
import DeleteBasket from "./assets/svg/homepage/deleteBasket.svg"
import DeleteProduct from "./assets/svg/homepage/deleteProduct.svg"

function ProductCard({ subProduct, subCategory, index }) {
    const { basketItemCount, basketList } = useSelector(state => state.basket)
    const dispatch = useDispatch()
    const addCart = () => {
        dispatch(actionAddBasket(subProduct));
        console.log(basketList, 'basketList')
    }
    const removeProduct = () => {
        //dispatch(actionBasketItemCount(0));
    }
    const deleteProduct = () => {
        //dispatch(actionBasketItemCount(basketItemCount - 1));
    }
    return (
        <>
            {/**
            <div key={index} className={styles.headerWrapper}>
                <h5 className={styles.title}>{subCategory.name}</h5>
            </div>
             */
            }
            <article className={styles.productMain} key={index}>
                <div className={styles.imageMain}>
                    <div className={styles.imageLink} scroll={false}>
                        <figure className={styles.imageFigure}>
                            <Image className={styles.image} src={`/products/${subProduct.images}`} width={120} height={120} alt={subProduct.name} />
                        </figure>
                        <div className={styles.counterMain}>
                            {basketList.map((basket, index) => {
                                return (
                                    basket.id === subProduct.id && basket.basketItemCount > 0 &&
                                    <>
                                        {basket.basketItemCount <= 1 ?
                                            <div className={styles.removeProduct} key={index}>
                                                <button type="button" className={styles.removeButton} onClick={removeProduct}>
                                                    <div className={styles.removeButtonMain}>
                                                        <DeleteBasket />
                                                    </div>
                                                </button>
                                            </div>
                                            :
                                            <div className={styles.deleteProduct}>
                                                <button type="button" className={styles.deleteButton} onClick={deleteProduct}>
                                                    <div className={styles.deleteButtonMain}>
                                                        <DeleteProduct />
                                                    </div>
                                                </button>
                                            </div>
                                        }
                                        <div className={styles.productCount}>{basket.basketItemCount}</div>
                                    </>
                                )
                            })}
                            <div className={styles.wrapper}>
                                <button className={styles.counterButton} onClick={addCart}>
                                    <div className={styles.iconMain}>
                                        <ProductCounter className={styles.icon} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.priceMain}>
                    <span className={styles.price}>{subProduct.priceText}</span>
                </div>
                <span className={styles.titleMain}>{subProduct.name}</span>
                <div className={styles.paragraphMain}>
                    <p className={styles.paragraph}>{subProduct.shortDescription}</p>
                </div>
            </article>
        </>
    )
}

export default ProductCard