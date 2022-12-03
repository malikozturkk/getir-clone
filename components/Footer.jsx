import React from 'react'
import footer from "../styles/layout/Footer.module.scss"
import Link from 'next/link'
import Language from "./assets/svg/navbar/language.svg"
import Instagram from "./assets/svg/footer/instagram.svg"
import Facebook from "./assets/svg/footer/facebook.svg"
import Twitter from "./assets/svg/footer/twitter.svg"
import AppGallery from "./assets/svg/footer/appgallery.svg"
import AppleStore from "./assets/svg/footer/applestore.svg"
import GooglePlay from "./assets/svg/footer/googleplay.svg"

function Footer() {
  return (
    <footer className={footer.footer}>
        <nav className={footer.nav}>
            <div className={footer.top}>
                <div className={footer.market}>
                    <div className={footer.title}>Getir'i indirin!</div>
                    <ol className={footer.lists}>
                        <li className={footer.listItem}>
                            <a className={footer.socialLink} href='https://apps.apple.com/app/id995280265' target='_blank'>
                                <figure className={footer.appMarket}>
                                    <AppleStore />
                                </figure>
                            </a>
                        </li>
                        <li className={footer.listItem}>
                            <a className={footer.socialLink} href='https://play.google.com/store/apps/details?id=com.getir' target='_blank'>
                                <figure className={footer.appMarket}>
                                    <GooglePlay />
                                </figure>
                            </a>
                        </li>
                        <li className={footer.listItem}>
                            <a className={footer.socialLink} href='https://appgallery.huawei.com/#/app/C100954039' target='_blank'>
                                <figure className={footer.appMarket}>
                                    <AppGallery />
                                </figure>
                            </a>
                        </li>
                    </ol>
                </div>
                <div className={footer.footerMenus}>
                    <div className={footer.title}>Getir'i keşfedin</div>
                    <ol className={footer.lists}>
                        <li className={footer.listItem}>
                            <a className={footer.link} href='https://getir.com/hakkimizda/' target='_blank'>
                                <span className={footer.text}>Hakkımızda</span>
                            </a>
                        </li>
                        <li className={footer.listItem}>
                            <a className={footer.link} href='https://career.getir.com/' target='_blank'>
                                <span className={footer.text}>Kariyer</span>
                            </a>
                        </li>
                        <li className={footer.listItem}>
                            <a className={footer.link} href='https://career.getir.com/' target='_blank'>
                                <span className={footer.text}>Teknoloji Kariyerleri</span>
                            </a>
                        </li>
                        <li className={footer.listItem}>
                            <a className={footer.link} href='https://getir.com/hakkimizda/iletisim/' target='_blank'>
                                <span className={footer.text}>İletişim</span>
                            </a>
                        </li>
                        <li className={footer.listItem}>
                            <a className={footer.link} href='https://getir.com/sosyal-sorumluluk-projeleri/' target='_blank'>
                                <span className={footer.text}>Sosyal Sorumluluk Projeleri</span>
                            </a>
                        </li>
                    </ol>
                </div>
                <div className={footer.footerMenus}>
                    <div className={footer.title}>Yardıma mı ihtiyacınız var?</div>
                    <ol className={footer.lists}>
                        <li className={footer.listItem}>
                            <a className={footer.link} href='https://getir.com/yardim/sss/' target='_blank'>
                                <span className={footer.text}>Sıkça Sorulan Sorular</span>
                            </a>
                        </li>
                        <li className={footer.listItem}>
                            <a className={footer.link} href='https://getir.com/yardim/kvkk/' target='_blank'>
                                <span className={footer.text}>Kişisel Verilerin Korunması</span>
                            </a>
                        </li>
                        <li className={footer.listItem}>
                            <a className={footer.link} href='https://getir.com/yardim/gizlilik-politikasi/' target='_blank'>
                                <span className={footer.text}>Gizlilik Politikası</span>
                            </a>
                        </li>
                        <li className={footer.listItem}>
                            <a className={footer.link} href='https://getir.com/yardim/kullanim-kosullari/' target='_blank'>
                                <span className={footer.text}>Kullanım Koşulları</span>
                            </a>
                        </li>
                        <li className={footer.listItem}>
                            <a className={footer.link} href='https://getir.com/yardim/cerez-politikasi/' target='_blank'>
                                <span className={footer.text}>Çerez Politikası</span>
                            </a>
                        </li>
                    </ol>
                </div>
                <div className={footer.footerMenus}>
                    <div className={footer.title}>İş Ortağımız Olun</div>
                    <ol className={footer.lists}>
                        <li className={footer.listItem}>
                            <a className={footer.link} href='https://bayi-basvuru.getir.com/' target='_blank'>
                                <span className={footer.text}>Bayimiz Olun</span>
                            </a>
                        </li>
                        <li className={footer.listItem}>
                            <a className={footer.link} href='https://depodukkan.getir.com/' target='_blank'>
                                <span className={footer.text}>Deponuzu Kiralayın</span>
                            </a>
                        </li>
                        <li className={footer.listItem}>
                            <a className={footer.link} href='https://restoran.getiryemek.com/login' target='_blank'>
                                <span className={footer.text}>GetirYemek Restoranı Olun</span>
                            </a>
                        </li>
                        <li className={footer.listItem}>
                            <a className={footer.link} href='https://panel.getircarsi.com/form/pre-application' target='_blank'>
                                <span className={footer.text}>GetirÇarşı İşletmesi Olun</span>
                            </a>
                        </li>
                        <li className={footer.listItem}>
                            <a className={footer.link} href='https://getir.com/yemek/markalar/' target='_blank'>
                                <span className={footer.text}>Zincir Restoranlar</span>
                            </a>
                        </li>
                    </ol>
                </div>
                <div className={footer.etbisMenu}>
                    <a className={footer.etbisLink} href='https://www.eticaret.gov.tr/siteprofil/A8C52359B2F14075B6829557FC4306B1/getircom'>
                        <figure className={footer.etbisFigure}>
                            <img src='https://cdn.getir.com/getirweb-images/common/etbis.png' />
                        </figure>
                    </a>
                </div>
            </div>
        </nav>
        <article className={footer.article}>
            <div className={footer.bottom}>
                <span className={footer.copyright}>© 2022 Getir</span>
                <div className={footer.listDiv}>
                    <ol className={footer.list}>
                        <li className={footer.listItem}>
                            <div className={footer.listItemDiv}>
                                <Link href='/' className={footer.listLink}>
                                    <span className={footer.info}>Bilgi Toplumu Hizmetleri</span>
                                </Link>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className={footer.socialDiv}>
                    <ol className={footer.list}>
                        <li className={footer.listItem1}>
                            <div className={footer.listItemDiv}>
                                <a className={footer.listItemUrl} href='https://www.facebook.com/getir' target='_blank'>
                                    <div className={footer.listItemFacebook}>
                                        <Facebook className={footer.facebookIcon} />
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className={footer.listItem2}>
                            <div className={footer.listItemDiv}>
                                <a className={footer.listItemUrl} href='https://twitter.com/getir' target='_blank'>
                                    <div className={footer.listItemTwitter}>
                                        <Twitter className={footer.twitterIcon} />
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className={footer.listItem3}>
                            <div className={footer.listItemDiv}>
                                <a className={footer.listItemUrl} href='https://instagram.com/getir/' target='_blank'>
                                    <div className={footer.listItemInstagram}>
                                        <Instagram className={footer.instagramIcon} />
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className={footer.listItem4}>
                            <div className={footer.listItemLanguage}>
                                <button className={footer.languageButton}>
                                    <div className={footer.language}>
                                        <Language className={footer.languageIcon} />
                                    </div>
                                    <span className={footer.languageText}>Türkçe (TR)</span>
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