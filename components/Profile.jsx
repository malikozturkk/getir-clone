import React from 'react'
import styles from "../styles/layout/Navbar.module.scss"
import Link from 'next/link'
import Account from "./assets/svg/navbar/account.svg"
function Profile({ shadowClick }) {
  return (
    <>
        <ul className={styles.unOrderedLists}>
            <ul className={styles.unOrderedList}>
                <li className={styles.accountList}>
                    <div className={styles.accountDiv}>
                        <Link href="/hesap" className={styles.accountLink}>
                            <div className={styles.accountContainer}>
                                <div className={styles.accountIcons}>
                                    <div className={styles.accountIcon}>
                                        <Account className={styles.icon} />
                                    </div>
                                </div>
                                <div className={styles.accountMain}>
                                    <span className={styles.accountName}>Malik Öztürk</span>
                                    <span className={styles.accountPhone}>+905319476796</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </li>
                <li className={styles.otherList}>
                    <div className={styles.otherDiv}>
                        <Link href="/hesap/adreslerim/" className={styles.otherLink}>Adreslerim</Link>
                    </div>
                </li>
                <li className={styles.otherList}>
                    <div className={styles.otherDiv}>
                        <Link href="/hesap/favori-urunlerim/" className={styles.otherLink}>Favori Ürünlerim</Link>
                    </div>
                </li>
                <li className={styles.otherList}>
                    <div className={styles.otherDiv}>
                        <Link href="/hesap/gecmis-siparislerim/" className={styles.otherLink}>Geçmiş Siparişlerim</Link>
                    </div>
                </li>
                <li className={styles.otherList}>
                    <div className={styles.otherDiv}>
                        <Link href="/hesap/odeme-yontemlerim/" className={styles.otherLink}>Ödeme Yöntemlerim</Link>
                    </div>
                </li>
                <li className={styles.otherList}>
                    <div className={styles.otherDiv}>
                        <Link href="/hesap/fatura/" className={styles.otherLink}>Fatura Bilgileri</Link>
                    </div>
                </li>
                <li className={styles.otherList}>
                    <div className={styles.otherDiv}>
                        <Link href="/hesap/iletisim-tercihleri/" className={styles.otherLink}>İletişim Tercihlerim</Link>
                    </div>
                </li>
                <li className={styles.lineList}>
                    <div className={styles.lineDiv}>
                        <span className={styles.lineSpan}></span>
                    </div>
                </li>
                <li className={styles.logOutList}>
                    <div className={styles.logOutDiv}>
                        <button className={styles.logOutButton}>Çıkış yap</button>
                    </div>
                </li>
            </ul>
        </ul>
        <div className='shadow-bg' onClick={shadowClick}></div>
    </>
  )
}

export default Profile