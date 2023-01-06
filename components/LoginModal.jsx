import React from 'react'
import Link from "next/link"
import Close from "./assets/svg/navbar/close.svg"
import styles from "../styles/layout/LoginModal.module.scss"

function LoginModal({ shadowClick, signUpClick }) {
  return (
    <>
        <div className={styles.modalContainer}>
            <div className={styles.modalMain}>
                <div className={styles.modalClose}>
                    <button className={styles.modalCloseButton} onClick={shadowClick}>
                        <div className={styles.modalCloseIcon}>
                            <Close className={styles.icon} />
                        </div>
                    </button>
                </div>
                <div className={styles.modalContent}>
                    <div className={styles.modaltitleDiv}>
                        <h6 className={styles.title}>Giriş yap veya kayıt ol</h6>
                    </div>
                    <div className={styles.main}>
                        <form className={styles.loginForm}>
                            <div className={styles.loginInputs}>
                                <div className={styles.inputsMain}>
                                    <div>

                                    </div>
                                    <div className={styles.phoneInputContainer}>
                                        <div className={styles.phoneInputMain}>
                                            <div className={styles.phoneInput}>
                                                <input type="tel" className={styles.phone} name="gsm" pattern="[0-9.]+" maxLength="10" value="" />
                                                <label className={styles.label}>Telefon Numarası</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.loginButtonMain}>
                                <div className={styles.buttonDiv}>
                                    <button className={styles.loginButton}>Telefon numarası ile devam et</button>
                                </div>
                                <div className={styles.lightningMain}>
                                    Kişisel verilerinize dair Aydınlatma Metni için 
                                    <div className={styles.lightningClick}>
                                        <Link href='/' className={styles.lightningLink}>
                                            tıklayınız.
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={styles.modalBottom}>
                        Hala kayıt olmadınız mı?
                        <div className={styles.signUp}>
                            <button className={styles.signUpButton} onClick={signUpClick}>
                                Kayıt Ol
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='backdrop' onClick={shadowClick}></div>
    </>
  )
}

export default LoginModal