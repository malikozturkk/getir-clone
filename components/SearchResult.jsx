import React from 'react'
import styles from "../styles/layout/SearchResult.module.scss"
import ProductCounter from "./assets/svg/homepage/productCounter.svg"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getProduct } from '../utils/getProduct'
import { actionAddBasket, actionDeleteBasket, actionRemoveBasket } from '../store/basket'
import { useDispatch } from 'react-redux'

function SearchResult({ inputValue, setShowFavoriteSearch, setInputValue }) {
    const [products, setProduct] = useState([])
    const dispatch = useDispatch()
    const body = document.querySelector("body")
    useEffect(() => {
        getProduct(products)
    }, [])
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
                                <button className={styles.counterButton} onClick={() => console.log('sasa')}>
                                    <div className={styles.counterIcon}>
                                        <ProductCounter />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default SearchResult