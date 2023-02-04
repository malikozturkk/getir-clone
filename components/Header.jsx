import React, { useState } from 'react'
import styles from "../styles/layout/Header.module.scss"
import Link from 'next/link'
import Logo from "./assets/svg/header/logo.svg"
import SearchIcon from "./assets/svg/header/searchIcon.svg"
import Home from "./assets/svg/header/home.svg"
import ArrowRight from "./assets/svg/header/arrowRight.svg"
import { useTranslation } from "react-i18next"

function Header() {
    const { t } = useTranslation()
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.mainLogo}>
                <div className={styles.mainLogoElement}>
                    <div className={styles.mainLogoItem}>
                        <Link href='/' className={styles.mainLogoUrl}>
                            <figure className={styles.mainLogoFigure}>
                                <Logo />
                            </figure>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.mainSearchForm}>
                <article className={styles.mainSearchArticle}>
                    <form className={styles.form}>
                        <div className={styles.container}>
                            <div className={styles.searchFormMain}>
                                <div className={styles.main}>
                                    <div className={styles.general}>
                                        <div className={styles.buttonDiv}>
                                            <button className={styles.button}>
                                                <div className={styles.searchDiv}>
                                                    <SearchIcon className={styles.searchIcon} />
                                                </div>
                                            </button>
                                        </div>
                                        <div className={styles.inputDiv}>
                                            <input className={styles.input} aria-label='Search Bar' placeholder={t('SearchForm.inputPlaceholder')} tabIndex="0" value="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <article className={styles.timeMain}>
                                <div className={styles.home}>
                                    <button className={styles.homeButton}>
                                        <figure className={styles.homeFigure}>
                                            <Home className={styles.homeIcon} />
                                        </figure>
                                        <span className={styles.homeLabel}>{t('SearchForm.home')}</span>
                                        <div className={styles.arrowDiv}>
                                            <ArrowRight className={styles.arrowIcon} />
                                        </div>
                                    </button>
                                </div>
                                <span className={styles.times}>
                                    <span className={styles.tvs}>{t('SearchForm.eta')}</span>
                                    &nbsp;
                                    <time className={styles.time}>11 {t('SearchForm.minute')}</time>
                                </span>
                            </article>
                        </div>
                    </form>
                </article>
            </div>
            <div className={styles.spacer}></div>
        </div>
    </header>
  )
}

export default Header