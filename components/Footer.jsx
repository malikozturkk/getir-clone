import React from 'react'
import footer from "../styles/layout/Footer.module.scss"
import Link from 'next/link'
import Image from 'next/image'
import Language from "./assets/svg/navbar/language.svg"
import Instagram from "./assets/svg/footer/instagram.svg"
import Facebook from "./assets/svg/footer/facebook.svg"
import Twitter from "./assets/svg/footer/twitter.svg"
import AppGallery from "./assets/svg/footer/appgallery.svg"
import AppleStore from "./assets/svg/footer/applestore.svg"
import GooglePlay from "./assets/svg/footer/googleplay.svg"
import { actionLanguageModal } from '../store/language'
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

function Footer() {
    const dispatch = useDispatch()
    const { selectLang } = useSelector(state => state.language)
    const { t } = useTranslation()
    const year = new Date().getFullYear()

    return (
        <footer className={footer.footer}>
            <nav className={footer.nav}>
                <div className={footer.top}>
                    <div className={footer.market}>
                        <div className={footer.title}>{t('Footer.download')}</div>
                        <ol className={footer.lists}>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.socialLink}
                                    href="https://apps.apple.com/app/id995280265"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <figure className={footer.appMarket}>
                                        <AppleStore />
                                    </figure>
                                </a>
                            </li>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.socialLink}
                                    href="https://play.google.com/store/apps/details?id=com.getir"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <figure className={footer.appMarket}>
                                        <GooglePlay />
                                    </figure>
                                </a>
                            </li>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.socialLink}
                                    href="https://appgallery.huawei.com/#/app/C100954039"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <figure className={footer.appMarket}>
                                        <AppGallery />
                                    </figure>
                                </a>
                            </li>
                        </ol>
                    </div>
                    <div className={footer.footerMenus}>
                        <div className={footer.title}>{t('Footer.discover.title')}</div>
                        <ol className={footer.lists}>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.link}
                                    href="https://getir.com/hakkimizda/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={footer.text}>{t('Footer.discover.about')}</span>
                                </a>
                            </li>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.link}
                                    href="https://career.getir.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={footer.text}>{t('Footer.discover.careers')}</span>
                                </a>
                            </li>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.link}
                                    href="https://career.getir.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={footer.text}>{t('Footer.discover.technologyCareers')}</span>
                                </a>
                            </li>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.link}
                                    href="https://getir.com/hakkimizda/iletisim/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={footer.text}>{t('Footer.discover.contact')}</span>
                                </a>
                            </li>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.link}
                                    href="https://getir.com/sosyal-sorumluluk-projeleri/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={footer.text}>{t('Footer.discover.socialProject')}</span>
                                </a>
                            </li>
                        </ol>
                    </div>
                    <div className={footer.footerMenus}>
                        <div className={footer.title}>{t('Footer.help.title')}</div>
                        <ol className={footer.lists}>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.link}
                                    href="https://getir.com/yardim/sss/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={footer.text}>{t('Footer.help.faq')}</span>
                                </a>
                            </li>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.link}
                                    href="https://getir.com/yardim/kvkk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={footer.text}>{t('Footer.help.personalData')}</span>
                                </a>
                            </li>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.link}
                                    href="https://getir.com/yardim/gizlilik-politikasi/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={footer.text}>{t('Footer.help.privacy')}</span>
                                </a>
                            </li>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.link}
                                    href="https://getir.com/yardim/kullanim-kosullari/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={footer.text}>{t('Footer.help.termsConditions')}</span>
                                </a>
                            </li>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.link}
                                    href="https://getir.com/yardim/cerez-politikasi/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={footer.text}>{t('Footer.help.cookie')}</span>
                                </a>
                            </li>
                        </ol>
                    </div>
                    <div className={footer.footerMenus}>
                        <div className={footer.title}>{t('Footer.partner.title')}</div>
                        <ol className={footer.lists}>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.link}
                                    href="https://bayi-basvuru.getir.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={footer.text}>{t('Footer.partner.franchisee')}</span>
                                </a>
                            </li>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.link}
                                    href="https://depodukkan.getir.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={footer.text}>{t('Footer.partner.warehouse')}</span>
                                </a>
                            </li>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.link}
                                    href="https://restoran.getiryemek.com/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={footer.text}>{t('Footer.partner.food')}</span>
                                </a>
                            </li>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.link}
                                    href="https://panel.getircarsi.com/form/pre-application"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={footer.text}>{t('Footer.partner.locals')}</span>
                                </a>
                            </li>
                            <li className={footer.listItem}>
                                <a
                                    className={footer.link}
                                    href="https://getir.com/yemek/markalar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={footer.text}>{t('Footer.partner.chainRestaurants')}</span>
                                </a>
                            </li>
                        </ol>
                    </div>
                    <div className={footer.etbisMenu}>
                        <a
                            className={footer.etbisLink}
                            href="https://www.eticaret.gov.tr/siteprofil/A8C52359B2F14075B6829557FC4306B1/getircom"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <figure className={footer.etbisFigure}>
                                <Image
                                    width={120}
                                    height={120}
                                    src="https://cdn.getir.com/getirweb-images/common/etbis.png"
                                    alt="ETBIS Logo"
                                />
                            </figure>
                        </a>
                    </div>
                </div>
            </nav>
            <article className={footer.article}>
                <div className={footer.bottom}>
                    <span className={footer.copyright}>© {year} Getir</span>
                    <div className={footer.listDiv}>
                        <ol className={footer.list}>
                            <li className={footer.listItem}>
                                <div className={footer.listItemDiv}>
                                    <Link href='/' scroll={false} className={footer.listLink}>
                                        <span className={footer.info}>{t('Footer.information')}</span>
                                    </Link>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <div className={footer.socialDiv}>
                        <ol className={footer.list}>
                            <li className={footer.listItem1}>
                                <div className={footer.listItemDiv}>
                                    <a className={footer.listItemUrl} href='https://www.facebook.com/getir' target='_blank' rel="noopener noreferrer">
                                        <div className={footer.listItemFacebook}>
                                            <Facebook className={footer.facebookIcon} />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li className={footer.listItem2}>
                                <div className={footer.listItemDiv}>
                                    <a className={footer.listItemUrl} href='https://twitter.com/getir' target='_blank' rel="noopener noreferrer">
                                        <div className={footer.listItemTwitter}>
                                            <Twitter className={footer.twitterIcon} />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li className={footer.listItem3}>
                                <div className={footer.listItemDiv}>
                                    <a className={footer.listItemUrl} href='https://instagram.com/getir/' target='_blank' rel="noopener noreferrer">
                                        <div className={footer.listItemInstagram}>
                                            <Instagram className={footer.instagramIcon} />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li className={footer.listItem4} onClick={() => dispatch(actionLanguageModal(true))}>
                                <div className={footer.listItemLanguage}>
                                    <button className={footer.languageButton}>
                                        <div className={footer.language}>
                                            <Language className={footer.languageIcon} />
                                        </div>
                                        <span className={footer.languageText}>{selectLang}</span>
                                    </button>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </article>
        </footer>
    )
}

export default Footer