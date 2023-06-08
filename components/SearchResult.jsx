import React from 'react'
import styles from "../styles/layout/SearchResult.module.scss"
import ProductCounter from "./assets/svg/homepage/productCounter.svg"
import DeleteBasket from "./assets/svg/homepage/deleteBasket.svg"
import DeleteProduct from "./assets/svg/homepage/deleteProduct.svg"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getProduct } from '../utils/getProduct'
import { actionAddBasket, actionDeleteBasket, actionRemoveBasket } from '../store/basket'
import { useDispatch, useSelector } from 'react-redux'

function SearchResult({ inputValue, setShowFavoriteSearch, setInputValue }) {
    const { basketList } = useSelector(state => state.basket)
    const [products, setProduct] = useState([])
    const dispatch = useDispatch()
    const body = document.querySelector("body")
    useEffect(() => {
        getProduct(products)
    }, [])
    const removeCart = (product) => {
        dispatch(actionRemoveBasket(product));
    }
    const deleteCart = (product) => {
        dispatch(actionDeleteBasket(product));
    }
    return (
        <div className={styles.resultMain}>
            {products.filter(item => {
                const searchTerm = inputValue.toLowerCase()
                const fullName = item.name.toLowerCase()
                return searchTerm && fullName.indexOf(searchTerm) !== -1
            })
                .map((product, index) => (
                    <div className={styles.resultItem} key={index}>
                        <div className={styles.searchedProduct}>
                            <Link href={`/product/${product?.id}`} className={styles.productButton} onClick={() => {
                                setInputValue('')
                                setShowFavoriteSearch(false)
                                body.classList.remove("showFavoriteSearch")
                            }}>
                                <div className={styles.searchedMain}>
                                    <figure className={styles.searchedFigure}>
                                        <Image src={`/products/${product?.images}`} width={32} height={32} alt={product.name} />
                                    </figure>
                                    <div className={styles.searchedInfo}>
                                        <h1 className={styles.productTitle}>
                                            <span className={styles.name}>{product.name}</span>
                                        </h1>
                                        <span className={styles.productInfo}>{product.shortDescription}</span>
                                        <span className={styles.productPrice}>{product.priceText}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.counterMain}>
                            <div className={styles.counterContainer}>
                                <button className={styles.counterButton} onClick={() => dispatch(actionAddBasket(product))}>
                                    <div className={styles.counterIcon}>
                                        <ProductCounter />
                                    </div>
                                </button>
                                {basketList.map((basket, index) => {
                                    return (
                                        basket.id === product.id && basket.basketItemCount > 0 &&
                                        <>
                                            {basket.basketItemCount <= 1 ?
                                                <div className={styles.removeProduct} key={index}>
                                                    <button type="button" className={styles.removeButton} onClick={removeCart}>
                                                        <div className={styles.removeButtonMain}>
                                                            <DeleteBasket />
                                                        </div>
                                                    </button>
                                                </div>
                                                :
                                                <div className={styles.deleteProduct}>
                                                    <button type="button" className={styles.deleteButton} onClick={deleteCart}>
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
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default SearchResult