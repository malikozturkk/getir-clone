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
import { actionAddressModal, actionAddAddressModal } from '../store/address'
import { useDispatch, useSelector } from 'react-redux'
import AddressModal from './AddressModal'
import AddAddressModal from './AddAddressModal'

function Header() {
    const dispatch = useDispatch()
    const [showFavoriteSearch, setShowFavoriteSearch] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const { user } = useSelector(state => state.auth)
    const { addressModal, addAddressModal, addressList } = useSelector(state => state.address)
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
                                {JSON.parse(addressList) && user ?
                                    <article className={styles.timeMain}>
                                        <div className={styles.home} onClick={() => localStorage.getItem("addressList") ? dispatch(actionAddressModal(true)) : dispatch(actionAddAddressModal(true))}>
                                            <button className={styles.homeButton}>
                                                <figure className={styles.homeFigure}>
                                                    <Home className={styles.homeIcon} />
                                                </figure>
                                                <span className={styles.homeLabel}>
                                                    {JSON.parse(addressList)?.map((item, index) => (
                                                        <div key={index}>
                                                            {item.title}
                                                        </div>
                                                    ))}
                                                </span>
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
                                    : user &&
                                    <article className={styles.newAddressMain}>
                                        <div className={styles.newAddressContainer}>
                                            <button type="button" className={styles.buttonMain} onClick={() => dispatch(actionAddAddressModal(true))}>
                                                <div className={styles.buttonContainer}>
                                                    <button type="button" className={styles.button}>
                                                        <div className={styles.buttonDiv}>
                                                            <svg data-testid="icon" name="plus" size="10" color="#5D38C0" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="style__Icon-sc-__sc-hqksj3-1 hORzfG"><path d="M16 32c1.1 0 2-0.9 2-2v-12h12c1.1 0 2-0.9 2-2s-0.9-2-2-2h-12v-12c0-1.1-0.9-2-2-2s-2 0.9-2 2v12h-12c-1.1 0-2 0.9-2 2s0.9 2 2 2h12v12c0 1.1 0.9 2 2 2z" class="style__Path-sc-__sc-hqksj3-2 lcjQMU"></path></svg>
                                                        </div>
                                                        Yeni Adres Ekle
                                                    </button>
                                                </div>
                                            </button>
                                        </div>
                                    </article>
                                }
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
                            {addressModal &&
                                <AddressModal />
                            }
                            {addAddressModal &&
                                <AddAddressModal />
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