import React, { useEffect, useState } from 'react'
import styles from "../styles/layout/ProductList.module.scss"
import BreadCrumb from "./assets/svg/header/breadcrumb.svg"
import { useSelector } from "react-redux"
import { actionProductsList } from '../store/products'
import { products as Products } from '../data/products'
import { useDispatch } from "react-redux"
import ProductCard from './ProductCard'

function ProductDataList({ id }) {
    const products = Products.products
    const dispatch = useDispatch()
    const { selectCategory, selectSubCategory, selectSubCategories } = useSelector(state => state.products)
    useEffect(() => {
        dispatch(actionProductsList(products))
        localStorage.setItem("productList", JSON.stringify(products))
    }, [products])
    return (
        <>
            <div className={styles.headerWrapper}>
                <h5 className={styles.title}>
                    <ul className={styles.breadcrumb}>
                        <li className={styles.itemWrapper}>
                            <div className={styles.breadcrumbItem}>
                                <div className={styles.wrapper}>
                                    <div className={styles.link} scroll={false}>{selectCategory}</div>
                                </div>
                            </div>
                            <div className={styles.breadcrumbSeparator}>
                                <div className={styles.wrapper}>
                                    <BreadCrumb className={styles.icon} />
                                </div>
                            </div>
                        </li>
                        <li className={styles.itemWrapper}>
                            <div className={styles.breadcrumbItem}>
                                <div className={styles.wrapper}>
                                    <div className={styles.link} scroll={false}>{selectSubCategory}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </h5>
            </div>
            <div className={styles.cardPartials}>
                <div className={styles.cardWrapper}>
                    <div className={styles.main}>
                        <div className={styles.categoryProducts}>
                            <div className={styles.main}>
                                <div className={styles.wrapper}>
                                    <div className={styles.cardWrapper}>
                                        {products.map((product) => {
                                            return (
                                                product.subCategories.map((subCategory) => {
                                                    return (
                                                        subCategory.products?.map((subProduct) => {
                                                            if (id === product.slug) {
                                                                return (
                                                                    selectSubCategories.map((selectSubCategory, index) => {
                                                                        if (selectSubCategory.name === subCategory.name) {
                                                                            return (
                                                                                <ProductCard key={index} subProduct={subProduct} subCategory={subCategory} index={index} />
                                                                            )
                                                                        }
                                                                    })
                                                                )
                                                            }
                                                        })
                                                    )
                                                })
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDataList