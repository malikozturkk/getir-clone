import React from 'react'
import styles from "../styles/layout/ProductList.module.scss"
import Link from "next/link"
import Image from 'next/image'
import BreadCrumb from "./assets/svg/header/breadcrumb.svg"
import ProductCounter from "./assets/svg/homepage/productCounter.svg"
import Test from "./assets/jpg/test.jpg"
import { useSelector } from "react-redux"

function ProductList() {
  const { products } = useSelector(state => state.products)
  console.log(products, 'products redux')
  return (
    <>
      <div className={styles.headerWrapper}>
        <h5 className={styles.title}>
          <ul className={styles.breadcrumb}>
            <li className={styles.itemWrapper}>
              <div className={styles.breadcrumbItem}>
                <div className={styles.wrapper}>
                  <Link href='/' className={styles.link} scroll={false}>Su & İçecek</Link>
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
                  <Link href='/' className={styles.link} scroll={false}>Su</Link>
                </div>
              </div>
            </li>
          </ul>
        </h5>
      </div>  
      <div className={styles.cardWrapper}>
        <div className={styles.main}>
          <div className={styles.categoryProducts}>
            <div className={styles.main}>
              <div className={styles.wrapper}>
                <div className={styles.cardWrapper}>
                  <article className={styles.productMain}>
                    <div className={styles.imageMain}>
                      <Link href='/' className={styles.imageLink} scroll={false}>
                        <figure className={styles.imageFigure}>
                          <Image className={styles.image} src={Test} width={120} height={120} />
                        </figure>
                        <div className={styles.counterMain}>
                          <div className={styles.wrapper}>
                            <button className={styles.counterButton}>
                              <div className={styles.iconMain}>
                                <ProductCounter className={styles.icon} />
                              </div>
                            </button>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className={styles.priceMain}>
                      <span className={styles.price}>₺35,95</span>
                    </div>
                    <span className={styles.titleMain}>Kuzeyden</span>
                    <div className={styles.paragraphMain}>
                      <p className={styles.paragraph}>6 x 1,5 L</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList