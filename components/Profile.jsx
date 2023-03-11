import React from 'react'
import styles from "../styles/layout/Navbar.module.scss"
import Link from 'next/link'
import Account from "./assets/svg/navbar/account.svg"
import { useDispatch } from "react-redux"
import { logout, actionProfileModal } from '../store/auth'
import { useTranslation } from "react-i18next"
function Profile() {
    const userName = localStorage.getItem("userName")
    const phone = localStorage.getItem("phone")
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const logOut = () => {
        dispatch(logout())
        dispatch(actionProfileModal(false))
    }
  return (
    <>
        <ul className={styles.unOrderedLists}>
            <ul className={styles.unOrderedList}>
                <li className={styles.accountList}>
                    <div className={styles.accountDiv}>
                        <Link href="/hesap" className={styles.accountLink} scroll={false}>
                            <div className={styles.accountContainer}>
                                <div className={styles.accountIcons}>
                                    <div className={styles.accountIcon}>
                                        <Account className={styles.icon} />
                                    </div>
                                </div>
                                <div className={styles.accountMain}>
                                    <span className={styles.accountName}>{userName}</span>
                                    <span className={styles.accountPhone}>{phone}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </li>
                <li className={styles.otherList}>
                    <div className={styles.otherDiv}>
                        <Link href="/hesap/adreslerim/" className={styles.otherLink} scroll={false}>{t('Profile.address')}</Link>
                    </div>
                </li>
                <li className={styles.otherList}>
                    <div className={styles.otherDiv}>
                        <Link href="/hesap/favori-urunlerim/" className={styles.otherLink} scroll={false}>{t('Profile.favorite')}</Link>
                    </div>
                </li>
                <li className={styles.otherList}>
                    <div className={styles.otherDiv}>
                        <Link href="/hesap/gecmis-siparislerim/" className={styles.otherLink} scroll={false}>{t('Profile.previous')}</Link>
                    </div>
                </li>
                <li className={styles.otherList}>
                    <div className={styles.otherDiv}>
                        <Link href="/hesap/odeme-yontemlerim/" className={styles.otherLink} scroll={false}>{t('Profile.paymentMethods')}</Link>
                    </div>
                </li>
                <li className={styles.otherList}>
                    <div className={styles.otherDiv}>
                        <Link href="/hesap/fatura/" className={styles.otherLink} scroll={false}>{t('Profile.invoice')}</Link>
                    </div>
                </li>
                <li className={styles.otherList}>
                    <div className={styles.otherDiv}>
                        <Link href="/hesap/iletisim-tercihleri/" className={styles.otherLink} scroll={false}>{t('Profile.communication')}</Link>
                    </div>
                </li>
                <li className={styles.lineList}>
                    <div className={styles.lineDiv}>
                        <span className={styles.lineSpan}></span>
                    </div>
                </li>
                <li className={styles.logOutList}>
                    <div className={styles.logOutDiv}>
                        <button className={styles.logOutButton} onClick={logOut}>{t('Profile.logout')}</button>
                    </div>
                </li>
            </ul>
        </ul>
        <div className='shadow-bg' onClick={() => dispatch(actionProfileModal(false))}></div>
    </>
  )
}

export default Profile