import React, { useEffect, useState, useRef } from 'react'
import styles from "../styles/layout/Header.module.scss"
import Link from 'next/link'
import Logo from "./assets/svg/header/logo.svg"
import SearchIcon from "./assets/svg/header/searchIcon.svg"
import Home from "./assets/svg/header/home.svg"
import HeaderBasket from "./assets/svg/header/headerBasket.svg"
import ArrowRight from "./assets/svg/header/arrowRight.svg"
import { actionAddBasket, actionDeleteBasket, actionRemoveBasket } from '../store/basket'
import { useTranslation } from "react-i18next"
import FavoriteSearch from './FavoriteSearch'
import SearchResult from './SearchResult'
import { actionAddressModal, actionAddAddressModal } from '../store/address'
import { useDispatch, useSelector } from 'react-redux'
import AddressModal from './AddressModal'
import AddAddressModal from './AddAddressModal'
import ProductCounter from "./assets/svg/homepage/productCounter.svg"
import DeleteBasket from "./assets/svg/homepage/deleteBasket.svg"
import DeleteProduct from "./assets/svg/homepage/deleteProduct.svg"

function Header() {
    const dispatch = useDispatch()
    const [showFavoriteSearch, setShowFavoriteSearch] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [showBasketModal, setShowBasketModal] = useState(false)
    const { user } = useSelector(state => state.auth)
    const { basketList, basketTotalAmount } = useSelector(state => state.basket)
    const { addressModal, addAddressModal, addressList } = useSelector(state => state.address)
    const ref = useRef();
    const refBasket = useRef();
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

    useEffect(() => {
        const body = document.querySelector("body");
        const checkIfClickedOutside = (e) => {
            if (showBasketModal && refBasket.current && !refBasket.current.contains(e.target)) {
                setShowBasketModal((oldState) => !oldState)
                body.classList.remove("showBasketModal");
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
            if (!showBasketModal) {
                body.classList.add("showBasketModal");
            }
        };
    }, [showBasketModal])

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
                                                            <svg data-testid="icon" name="plus" size="10" color="#5D38C0" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="style__Icon-sc-__sc-hqksj3-1 hORzfG"><path d="M16 32c1.1 0 2-0.9 2-2v-12h12c1.1 0 2-0.9 2-2s-0.9-2-2-2h-12v-12c0-1.1-0.9-2-2-2s-2 0.9-2 2v12h-12c-1.1 0-2 0.9-2 2s0.9 2 2 2h12v12c0 1.1 0.9 2 2 2z" className="style__Path-sc-__sc-hqksj3-2 lcjQMU"></path></svg>
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
                {basketList.length > 0 ?
                    <div className={styles.headerBasketWrapper} onClick={() => setShowBasketModal(true)}>
                        <div className={`${styles.headerBasketContainer} ${showBasketModal && styles.headerBasketActive}`}>
                            <div className={styles.headerBasketMain} ref={refBasket}>
                                <figure className={styles.headerBasketFigure}>
                                    <HeaderBasket className={styles.headerBasketImage} />
                                </figure>
                                <span className={styles.headerBasketAmount}>₺{parseFloat(basketTotalAmount).toFixed(2)}</span>
                            </div>
                            {showBasketModal &&
                                <div className={styles.headerBasketModal} ref={refBasket}>
                                    <div className={styles.headerBasketModalMain}>
                                        <article className={styles.headerBasketArticle}>
                                            <div className={styles.headerBasketListProduct}>
                                                {basketList.map((basket, index) => (
                                                    <div className={styles.productMain} key={index}>
                                                        <div className={styles.productInfo}>
                                                            <span className={styles.productName}>{basket.name}</span>
                                                            <span className={styles.productPrice}>{basket.priceText}</span>
                                                        </div>
                                                        <div className={styles.counterMain}>
                                                            <div className={styles.deleteMain}>
                                                                <button className={styles.deleteButton} onClick={() => {
                                                                    basket.basketItemCount > 1 ? dispatch(actionDeleteBasket(basket)) : dispatch(actionRemoveBasket(basket))
                                                                    basketList.length === 1 && basket.basketItemCount === 1 && document.querySelector("body").classList.remove("showBasketModal")
                                                                }}>
                                                                    {basket.basketItemCount > 1 ?
                                                                        <div className={styles.deleteProduct}>
                                                                            <DeleteProduct />
                                                                        </div>
                                                                        :
                                                                        <div className={styles.removeProduct}>
                                                                            <DeleteBasket />
                                                                        </div>
                                                                    }
                                                                </button>
                                                            </div>
                                                            <div className={styles.productPieceMain}>
                                                                <div className={styles.productPiece}>{basket.basketItemCount}</div>
                                                            </div>
                                                            <div className={styles.addMain}>
                                                                <button className={styles.addButton} onClick={() => dispatch(actionAddBasket(basket))}>
                                                                    <div className={styles.addProduct}>
                                                                        <ProductCounter />
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className={styles.headerBasketRedirect}>
                                                <Link className={styles.headerBasketRedirectButton} href='/sepet'>Sepete git</Link>
                                                <div className={styles.headerBasketTotalAmount}>₺{parseFloat(basketTotalAmount).toFixed(2)}</div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    :
                    <div className={styles.spacer}></div>
                }
            </div>
        </header>
    )
}

export default Header