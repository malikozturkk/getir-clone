import React, { useState, useEffect } from 'react'
import styles from "../styles/layout/Navbar.module.scss"
import Link from 'next/link'
import ProfileComponent from "../components/Profile"
import Getir from "./assets/svg/navbar/getir.svg"
import GetirYemek from "./assets/svg/navbar/getirYemek.svg"
import GetirBuyuk from "./assets/svg/navbar/getirBuyuk.svg"
import GetirSu from "./assets/svg/navbar/getirSu.svg"
import GetirFood from "./assets/svg/navbar/getirFood.svg"
import GetirMore from "./assets/svg/navbar/getirMore.svg"
import GetirWater from "./assets/svg/navbar/getirWater.svg"
import Language from "./assets/svg/navbar/language.svg"
import Campaigns from "./assets/svg/navbar/campaigns.svg"
import ArrowDown from "./assets/svg/navbar/arrowDown.svg"
import Profile from "./assets/svg/navbar/profile.svg"
import Login from "./assets/svg/navbar/login.svg"
import SignUp from "./assets/svg/navbar/signUp.svg"
import LoginModal from "./LoginModal"
import SignUpModal from "./SignUpModal"
import LanguageModal from './LanguageModal'
import { useSelector, useDispatch } from "react-redux"
import { actionSignupModal, actionLoginModal, actionProfileModal } from '../store/auth'
import { actionLanguageModal } from "../store/language"
import { useTranslation } from "react-i18next"

function Navbar() {
    const dispatch = useDispatch()
    const { user, signupModal, loginModal, profileModal } = useSelector(state => state.auth)
    const { languageModal, selectLang, selectedLanguage } = useSelector(state => state.language)
    const initialState = {
        language: typeof window !== "undefined" ? window.localStorage.getItem("i18nextLng") : false
    }
    const { t } = useTranslation()
    let arrowStyle = {
        transform: 'rotate(0deg)'
    }
    if (profileModal) {
        arrowStyle = {
            transform: 'rotate(-180deg)'
        }
    }
  return (
    <>
        <nav className={styles.nav}>
            <div className={styles.navMain}>
                <div className={styles.navLeft}>
                    <div className={styles.firstItem}>
                        <div className={styles.itemList}>
                            <Link href='/' className={styles.itemUrl}>
                                <figure className={styles.figure1}>
                                    <Getir className={styles.logo} viewBox="0 0 53 24" />
                                </figure>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.secondItem}>
                        <div className={styles.itemList}>
                            <Link href='/getiryemek' className={styles.itemUrl}>
                                <figure className={styles.figure2}>
                                    {initialState.language === 'tr' 
                                    ?
                                        <GetirYemek className={styles.logo} viewBox="0 0 131 24" />
                                    :
                                        <GetirFood className={styles.logo} viewBox="0 0 106 24" />
                                    }
                                </figure>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.thirdItem}>
                        <div className={styles.itemList}>
                            <Link href='/getirbuyuk' className={styles.itemUrl}>
                                <figure className={styles.figure3}>
                                    {initialState.language === 'tr' 
                                    ?
                                        <GetirBuyuk className={styles.logo} viewBox="0 0 122 24" />
                                    :
                                        <GetirMore className={styles.logo} viewBox="0 0 75 16" />
                                    }
                                </figure>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.fourthItem}>
                        <div className={styles.itemList}>
                            <Link href='/getirsu' className={styles.itemUrl}>
                                <figure className={styles.figure4}>
                                    {initialState.language === 'tr' 
                                    ?
                                        <GetirSu className={styles.logo} viewBox="0 0 210 64" />
                                    :
                                        <GetirWater className={styles.logo} viewBox="0 0 316 64" />
                                    }
                                </figure>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.navRight}>
                    <div className={styles.firstItem} onClick={() => dispatch(actionLanguageModal(true))}>
                        <button className={styles.changeLanguageButton}>
                            <div className={styles.changeLanguageDiv}>
                                <Language className={styles.changeLanguageIcon} />
                            </div>
                            <span className={styles.changeLanguageText}>{selectLang}</span>
                        </button>
                    </div>
                    {user &&
                        <>
                            <div className={styles.secondItem}>
                                <Link href='/kampanyalar' className={styles.itemUrl}>
                                    <div className={styles.campaignsDiv}>
                                        <Campaigns className={styles.campaignsIcon} />
                                    </div>
                                    {t('Navbar.campaign')}
                                </Link>
                            </div>
                            <button className={styles.thirdItem} onClick={() => dispatch(actionProfileModal(true))}>
                                <div className={styles.profile}>
                                    <span className={styles.profileSpan}>
                                        <div className={styles.profileDiv}>
                                            <Profile className={styles.profileIcon} />
                                        </div>
                                        {t('Navbar.profile')}
                                    </span>
                                    <div className={styles.profileDropdown} style={arrowStyle}>
                                        <div className={styles.profileDropdownIcon}>
                                            <ArrowDown className={styles.arrowDownIcon} />
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </>
                    }
                    {!user &&
                        <>
                            <div className={styles.loginItem}>
                                <button type="button" className={styles.loginButton} onClick={() => dispatch(actionLoginModal(true))}>
                                    <div className={styles.loginIcon}>
                                        <Login className={styles.icon} />
                                    </div>
                                    {t('Navbar.login')}
                                </button>
                            </div>
                            <div className={styles.signUpItem}>
                                <button type="button" className={styles.signUpButton} onClick={() => dispatch(actionSignupModal(true))}>
                                    <div className={styles.signUpIcon}>
                                        <SignUp className={styles.icon} />
                                    </div>
                                    {t('Navbar.signup')}
                                </button>
                            </div>
                        </>
                    }
                </div>

                {loginModal &&
                    <LoginModal />
                }

                {signupModal &&
                    <SignUpModal />
                }

                {profileModal && 
                    <ProfileComponent />
                }
                {languageModal &&
                    <LanguageModal />
                }
            </div>
        </nav>
    </>
  )
}

export default Navbar