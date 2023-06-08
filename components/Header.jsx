import React, { useEffect, useState, useRef } from 'react'
import styles from "../styles/layout/Header.module.scss"
import Link from 'next/link'
import Logo from "./assets/svg/header/logo.svg"
import SearchIcon from "./assets/svg/header/searchIcon.svg"
import Home from "./assets/svg/header/home.svg"
import ArrowRight from "./assets/svg/header/arrowRight.svg"
import { useTranslation } from "react-i18next"
import FavoriteSearch from './FavoriteSearch'
import SearchResult from './SearchResult'

function Header() {
    const [showFavoriteSearch, setShowFavoriteSearch] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const ref = useRef();
    useEffect(() => {
        const body = document.querySelector("body");
        const checkIfClickedOutside = (e) => {
            if (showFavoriteSearch && ref.current && !ref.current.contains(e.target)) {
                setShowFavoriteSearch((oldState) => !oldState)
                body.classList.remove("showFavoriteSearch");
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
            if (!showFavoriteSearch) {
                body.classList.add("showFavoriteSearch");
            }
        };
    }, [showFavoriteSearch])
    const { t } = useTranslation()
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.mainLogo}>
                    <div className={styles.mainLogoElement}>
                        <div className={styles.mainLogoItem}>
                            <Link href='/' scroll={false} className={styles.mainLogoUrl}>
                                <figure className={styles.mainLogoFigure}>
                                    <Logo />
                                </figure>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.mainSearchForm} ref={ref}>
                    <article className={styles.mainSearchArticle}>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <div className={`${styles.container} ${showFavoriteSearch ? styles.showFavoriteSearch : ''}`}>
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
                                                <input onClick={() => setShowFavoriteSearch(true)} onChange={(e) => setInputValue(e.target.value)} value={inputValue} className={styles.input} aria-label='Search Bar' placeholder={t('SearchForm.inputPlaceholder')} tabIndex="0" />
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
                            {showFavoriteSearch && inputValue.length <= 1 &&
                                <div className={styles.search}>
                                    <FavoriteSearch />
                                </div>
                            }
                            {showFavoriteSearch && inputValue.length > 1 &&
                                <div className={styles.search}>
                                    <SearchResult inputValue={inputValue} setInputValue={setInputValue} setShowFavoriteSearch={setShowFavoriteSearch} />
                                </div>
                            }
                        </form>
                    </article>
                </div>
                <div className={styles.spacer}></div>
            </div>
        </header>
    )
}

export default Header