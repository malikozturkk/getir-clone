"use client"
import React from 'react'
import styles from "../styles/layout/Categories.module.scss"
import { useTranslation } from "react-i18next"
import Link from 'next/link'
import Image from 'next/image'
import ArrowDown from "./assets/svg/navbar/arrowDown.svg"
import ArrowRight from "./assets/svg/header/arrowRight.svg"
import { useState, useEffect } from 'react'
import { actionSelectedSubCategory, actionSelectedCategory, actionSelectedCategories } from '../store/products'
import { useDispatch } from "react-redux"
function Categories({ id }) {
  const [products, setProducts] = useState([])
  const { t } = useTranslation()
  const [showCollapse, setShowCollapse] = useState("yeni-urunler")
  const dispatch = useDispatch()
  const [subIndex, setSubIndex] = useState(0)
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(data => data.json())
      .then(data => {
        setProducts(data)
      });
  }, [])
  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>
        <h5 className={styles.title}>{t('Categories.title')}</h5>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.collapse}>
          {products.map((product, index) => {
            if (id === product.slug) {
              dispatch(actionSelectedCategory(product.name))
              dispatch(actionSelectedCategories(product.subCategories))
            }
            return (
              <Link href={`/${product?.slug}`} key={index} className={`${styles.panel} ${showCollapse === product.slug ? styles.active : ''}`}>
                <div
                  className={styles.panelHeaderWrapper}
                  onClick={() => {
                    setShowCollapse(product.slug === showCollapse ? false : product.slug)
                    setSubIndex(0)
                  }}
                >
                  <div className={styles.panelHeader}>
                    <span className={styles.text}>
                      <div className={styles.wrapper}>
                        <div scroll={false} className={styles.link}>
                          <figure className={styles.imageWrapper}>
                            <Image
                              className={styles.image}
                              src={`/categories/${product.image}`}
                              width={30}
                              height={30}
                              alt={product.name}
                            />
                          </figure>
                          <div className={styles.text}>
                            <span className={styles.name}>{product.name}</span>
                          </div>
                          <div className={styles.arrow}>
                            <ArrowDown className={styles.icon} />
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
                {showCollapse === product.slug &&
                  <div key={index} className={styles.panelBody}>
                    {product.subCategories.map((subCategory, index) => {
                      if (subIndex === subCategory.id) {
                        dispatch(actionSelectedSubCategory(subCategory.name))
                      }
                      return (
                        <div key={index} className={styles.wrapper} onClick={() => setSubIndex(index)}>
                          <div scroll={false} className={styles.subLink}>
                            <span className={styles.name}>{subCategory.name}</span>
                            <div className={styles.subArrow}>
                              {index === subIndex &&
                                <ArrowRight className={styles.subIcon} />
                              }
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                }
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Categories