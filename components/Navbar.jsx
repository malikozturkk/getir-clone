import React, { useState } from 'react'
import styles from "../styles/layout/Navbar.module.scss"
import Link from 'next/link'
import ProfileComponent from "../components/Profile"
import Getir from "./assets/svg/navbar/getir.svg"
import GetirYemek from "./assets/svg/navbar/getirYemek.svg"
import GetirBuyuk from "./assets/svg/navbar/getirBuyuk.svg"
import GetirSu from "./assets/svg/navbar/getirSu.svg"
import Language from "./assets/svg/navbar/language.svg"
import Campaigns from "./assets/svg/navbar/campaigns.svg"
import ArrowDown from "./assets/svg/navbar/arrowDown.svg"
import Profile from "./assets/svg/navbar/profile.svg"
import Login from "./assets/svg/navbar/login.svg"
import SignUp from "./assets/svg/navbar/signUp.svg"
import LoginModal from "./LoginModal"
import SignUpModal from "./SignUpModal"

function Navbar() {
    const [showProfile, setShowProfile] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)
    const user = true
    let arrowStyle = {
        transform: 'rotate(0deg)'
    }
    if (showProfile) {
        arrowStyle = {
            transform: 'rotate(-180deg)'
        }
    }
    function signUpClick () {
        setShowSignUp(!showSignUp)
        setShowLogin(!showLogin)
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
                                    <GetirYemek className={styles.logo} viewBox="0 0 131 24" />
                                </figure>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.thirdItem}>
                        <div className={styles.itemList}>
                            <Link href='/getirbuyuk' className={styles.itemUrl}>
                                <figure className={styles.figure3}>
                                    <GetirBuyuk className={styles.logo} viewBox="0 0 122 24" />
                                </figure>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.fourthItem}>
                        <div className={styles.itemList}>
                            <Link href='/getirsu' className={styles.itemUrl}>
                                <figure className={styles.figure4}>
                                    <GetirSu className={styles.logo} viewBox="0 0 210 64" />
                                </figure>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.navRight}>
                    <div className={styles.firstItem}>
                        <button className={styles.changeLanguageButton}>
                            <div className={styles.changeLanguageDiv}>
                                <Language className={styles.changeLanguageIcon} />
                            </div>
                            <span className={styles.changeLanguageText}>Türkçe (TR)</span>
                        </button>
                    </div>
                    {user &&
                        <>
                            <div className={styles.secondItem}>
                                <Link href='/kampanyalar' className={styles.itemUrl}>
                                    <div className={styles.campaignsDiv}>
                                        <Campaigns className={styles.campaignsIcon} />
                                    </div>
                                    Kampanyalar
                                </Link>
                            </div>
                            <button className={styles.thirdItem} onClick={() => setShowProfile(!showProfile)}>
                                <div className={styles.profile}>
                                    <span className={styles.profileSpan}>
                                        <div className={styles.profileDiv}>
                                            <Profile className={styles.profileIcon} />
                                        </div>
                                        Profil
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
                                <button type="button" className={styles.loginButton} onClick={() => setShowLogin(!showLogin)}>
                                    <div className={styles.loginIcon}>
                                        <Login className={styles.icon} />
                                    </div>
                                    Giriş yap
                                </button>
                            </div>
                            <div className={styles.signUpItem}>
                                <button type="button" className={styles.signUpButton} onClick={() => setShowSignUp(!showSignUp)}>
                                    <div className={styles.signUpIcon}>
                                        <SignUp className={styles.icon} />
                                    </div>
                                    Kayıt Ol
                                </button>
                            </div>
                        </>
                    }
                </div>

                {showLogin &&
                    <LoginModal shadowClick={() => setShowLogin(!showLogin)} signUpClick={signUpClick} />
                }

                {showSignUp &&
                    <SignUpModal shadowClick={() => setShowSignUp(!showSignUp)} signUpClick={signUpClick} />
                }

                {showProfile && 
                    <ProfileComponent shadowClick={() => setShowProfile(!showProfile)} />
                }
            </div>
        </nav>
    </>
  )
}

export default Navbar