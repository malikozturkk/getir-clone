import React from 'react'
import { tests } from '../data/test'
import styles from "../styles/layout/Categories.module.scss"
import { useTranslation } from "react-i18next"
import Link from 'next/link'
import Image from 'next/image'
import ArrowDown from "./assets/svg/navbar/arrowDown.svg"
import ArrowRight from "./assets/svg/header/arrowRight.svg"
import { useState } from 'react'
function Categories() {
  const { t } = useTranslation()
  const [showCollapse, setShowCollapse] = useState("yeni-urunler")
  const [subIndex, setSubIndex] = useState(0)
  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>
        <h5 className={styles.title}>{t('Categories.title')}</h5>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.collapse}>
          {tests.map((test, index) => (
            <div key={index} className={`${styles.panel} ${showCollapse === test.slug ? styles.active : ''}`}>
              <div 
                className={styles.panelHeaderWrapper} 
                onClick={() => {
                  setShowCollapse(test.slug === showCollapse ? false : test.slug)
                  setSubIndex(0)
                }}
              >
                <div className={styles.panelHeader}>
                  <span className={styles.text}>
                    <div className={styles.wrapper}>
                      <Link href='/' scroll={false} className={styles.link}>
                        <figure className={styles.imageWrapper}>
                          <Image 
                            className={styles.image}
                            src={`/categories/${test.image}`}
                            width={30}
                            height={30}
                            alt={test.name}
                          />
                        </figure>
                        <div className={styles.text}>
                          <span className={styles.name}>{test.name}</span>
                        </div>
                        <div className={styles.arrow}>
                          <ArrowDown className={styles.icon} />
                        </div>
                      </Link>
                    </div>
                  </span>
                </div>
              </div>
              {showCollapse === test.slug &&
                <div key={index} className={styles.panelBody}>
                  {test.subCategories.map((subCategory, index) => (
                    <div key={index} className={styles.wrapper} onClick={() => setSubIndex(index)}>
                      <Link href='/' scroll={false} className={styles.subLink}>
                        <span className={styles.name}>{subCategory.name}</span>
                        <div className={styles.subArrow}>
                          {index === subIndex &&
                            <ArrowRight className={styles.subIcon} />
                          }
                        </div>
                      </Link>
                    </div>
                  ))}  
                </div> 
              } 
            </div>
          ))}
        </div>
      </div>
  </div>
  )
}

export default Categories