import React from 'react'
import styles from "../styles/layout/ProductDetails.module.scss"
import Image from 'next/image'
import Favorite from "./assets/svg/product-details/favorite.svg"
import Favorites from "./assets/svg/product-details/favorite2.svg"
import LeftArrow from "./assets/svg/product-details/leftArrow.svg"
import RightArrow from "./assets/svg/product-details/rightArrow.svg"
import ProductCounter from "./assets/svg/homepage/productCounter.svg"
import { actionAddBasket, actionDeleteBasket, actionRemoveBasket } from '../store/basket'
import { useDispatch, useSelector } from 'react-redux'
import DeleteBasket from "./assets/svg/homepage/deleteBasket.svg"
import DeleteProduct from "./assets/svg/homepage/deleteProduct.svg"
function ProductDetails({ id, product }) {
    const dispatch = useDispatch()
    const { basketList, basketItemCount } = useSelector(state => state.basket)
    return (
        <>
            {id == product.id &&
                <main className={styles.productDetailsMain}>
                    <div className={styles.productDetailsContainer}>
                        <div className={styles.productDetailsCol1}>
                            <div className={styles.productNameMain}>
                                <div className={styles.productName}>
                                    <h2 className={styles.name}>{product.name}</h2>
                                    <span className={styles.info}>{product.shortDescription}</span>
                                </div>
                                <div className={styles.favoriteMain}>
                                    <button className={styles.favoriteMainButton}>
                                        <div className={styles.favoriteIcon}>
                                            <div className={styles.icon}>
                                                <Favorite className={styles.favorite} />
                                            </div>
                                            <div className={styles.icons}>
                                                <Favorites className={styles.favorite} />
                                            </div>
                                        </div>
                                        <span className={styles.favoriteTitle}>Favorilere Ekle</span>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.price}>
                                <span className={styles.struckPriceText}>{product.struckPriceText}</span>
                                <span className={styles.priceText}>{product.priceText}</span>
                            </div>
                        </div>
                        <div className={styles.productDetailsCol2}>
                            <div className={styles.mainImageContainer}>
                                <div className={styles.mainImage}>
                                    <div className={styles.leftSpacer}></div>
                                    <div className={styles.main}>
                                        <div className={styles.container}>
                                            <div className={styles.image}>
                                                <div className={styles.imageMain}>
                                                    <div className={styles.imageContainer}>
                                                        <div className={styles.item}>
                                                            <figure className={styles.figure}>
                                                                <Image src={`/products/${product.images}`} alt={product.name} className={styles.image} width={100} height={100} />
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.rightSpacer}></div>
                                </div>
                            </div>
                            <div className={styles.subImageContainer}>
                                <div className={styles.subImage}>
                                    <button className={styles.subImageButton}>
                                        <figure className={styles.subImageFigure}>
                                            <Image src={`/products/${product.images}`} alt={product.name} className={styles.image} width={100} height={100} />
                                        </figure>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.productDetailsCol3}>
                            {basketList.map((basket, index) => {
                                return (
                                    basket.id === product.id && basket.basketItemCount > 0 &&
                                    <div className={styles.basketTarget}>
                                        {basket.basketItemCount <= 1 ?
                                            <div className={styles.removeProduct} key={index}>
                                                <button type="button" className={styles.removeButton} onClick={() => dispatch(actionRemoveBasket(product))}>
                                                    <div className={styles.removeButtonMain}>
                                                        <DeleteBasket />
                                                    </div>
                                                </button>
                                            </div>
                                            :
                                            <div className={styles.deleteProduct}>
                                                <button type="button" className={styles.deleteButton} onClick={() => dispatch(actionDeleteBasket(product))}>
                                                    <div className={styles.deleteButtonMain}>
                                                        <DeleteProduct />
                                                    </div>
                                                </button>
                                            </div>
                                        }
                                        <div className={styles.productCount}>
                                            <div>{basket.basketItemCount}</div>
                                        </div>
                                        <div className={styles.addProduct}>
                                            <button className={styles.addButton} onClick={() => dispatch(actionAddBasket(product))}>
                                                <div className={styles.addButtonMain}>
                                                    <ProductCounter />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className={styles.addToCart}>
                                <button className={styles.addCart} onClick={() => dispatch(actionAddBasket(product))}>Sepete Ekle</button>
                            </div>
                        </div>
                        <div className={styles.productDetailsCol4}>
                            <div className={styles.container}>
                                <div className={styles.contents}>
                                    <span className={styles.title}>Paket İçeriği</span>
                                    <div className={styles.wrapperMain}>
                                        <div className={styles.wrapperLeft}>
                                            <button className={styles.leftButton}>
                                                <div className={styles.left}>
                                                    <LeftArrow className={styles.icon} />
                                                </div>
                                            </button>
                                        </div>
                                        <div className={styles.wrapperRight}>
                                            <button className={styles.rightButton}>
                                                <div className={styles.right}>
                                                    <RightArrow className={styles.icon} />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.carousel}>
                                    <div className={styles.carouselContainer}>
                                        <div className={styles.carouselMain}>
                                            <div className={styles.carouselList}>
                                                <div className={styles.carouselItem}>
                                                    <div className={styles.container}>
                                                        <div className={styles.main}>
                                                            <article className={styles.article}>
                                                                <div className={styles.imageMain}>
                                                                    <figure className={styles.main}>
                                                                        <Image src={`/products/${product.images}`} alt={product.name} className={styles.image} width={100} height={100} />
                                                                    </figure>
                                                                </div>
                                                                <div className={styles.textMain}>
                                                                    <span className={styles.text}></span>
                                                                </div>
                                                                <span className={styles.name}>{product.name}</span>
                                                                <div className={styles.descriptionMain}>
                                                                    <p className={styles.description}>{product.shortDescription}</p>
                                                                </div>
                                                            </article>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            }
        </>
    )
}

export default ProductDetails