import React from 'react'
import styles from "../styles/layout/Navbar.module.scss"
import Link from 'next/link'
import Getir from "./assets/svg/navbar/getir.svg"
import GetirYemek from "./assets/svg/navbar/getirYemek.svg"
import GetirBuyuk from "./assets/svg/navbar/getirBuyuk.svg"
import GetirSu from "./assets/svg/navbar/getirSu.svg"
import Language from "./assets/svg/navbar/language.svg"
import Campaigns from "./assets/svg/navbar/campaigns.svg"
import ArrowDown from "./assets/svg/navbar/arrowDown.svg"
import Profile from "./assets/svg/navbar/profile.svg"

function Navbar() {
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
                    <div className={styles.secondItem}>
                        <Link href='/kampanyalar' className={styles.itemUrl}>
                            <div className={styles.campaignsDiv}>
                                <Campaigns className={styles.campaignsIcon} />
                            </div>
                            Kampanyalar
                        </Link>
                    </div>
                    <div className={styles.thirdItem}>
                        <div className={styles.profile}>
                            <span className={styles.profileSpan}>
                                <div className={styles.profileDiv}>
                                    <Profile className={styles.profileIcon} />
                                </div>
                                Profil
                            </span>
                            <div className={styles.profileDropdown}>
                                <div className={styles.profileDropdownIcon}>
                                    <ArrowDown className={styles.arrowDownIcon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar