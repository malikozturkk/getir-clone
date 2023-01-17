import React from 'react'
import Link from "next/link"
import Close from "./assets/svg/navbar/close.svg"
import styles from "../styles/layout/LoginModal.module.scss"
import PhoneInput from './PhoneInput'
import ErrorLogin from "./assets/svg/header/errorLogin.svg"
import { useState } from 'react'
import { fetcher } from "../lib/api"
import { setToken } from "../lib/auth"

function LoginModal({ shadowClick, signUpClick }) {
    const [focus, setFocus] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState({
        identifier: '',
        password: ''
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await fetcher(
            `${process.env.NEXT_PUBLİC_STRAPI_URL}/auth/local`, 
            {
                method: "POST",
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    identifier: data.identifier,
                    password: data.password
                }),
            }
        );
        setToken(data);
    }

    function inputFocusOut(event) {
        setFocus(false)
        const input = event.target.value
        if (input.length > 0) {
            setFocus(true)
        }
        if (input.length < 10) {
            setError(true)
        }
        else {
            setError(false)
        }
    }
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
                        <form className={styles.loginForm} onSubmit={handleSubmit}>
                            <div className={`${styles.loginInputs} ${error ? styles.errorInputs : ''}`}>
                                <div className={`${styles.inputsMain} ${error ? styles.errorInputs : ''}`}>
                                    <PhoneInput />
                                    <div className={`${styles.phoneInputContainer} ${focus ? styles.focusContainer : ''} ${error ? styles.errorInput : ''}`}>
                                        <input onChange={handleChange} onBlur={(event) => inputFocusOut(event)} onClick={() => setFocus(true)} type="tel" className={styles.phone} name="identifier" pattern="[0-9.]+" maxLength="10" minLength="10" required />
                                        {!focus &&
                                            <label className={styles.label}>Telefon Numarası</label>
                                        }
                                        {focus &&
                                            <label className={styles.focusLabel}>Telefon Numarası</label>
                                        }
                                        {error &&
                                            <>
                                                <div className={styles.errorMain}>
                                                    <ErrorLogin className={styles.errorIcon} />
                                                </div>
                                                <span className={styles.errorMessage}>Lütfen telefon numaranızı giriniz.</span>
                                            </>
                                        }
                                    </div>
                                </div>
                                <div className={styles.passwordMain}>
                                    <div className={`${styles.passwordInputContainer} ${focus ? styles.focusContainer : ''} ${error ? styles.errorInput : ''}`}>
                                            <input onChange={handleChange} onBlur={(event) => inputFocusOut(event)} onClick={() => setFocus(true)} type="password" className={styles.password} name="password" />
                                            {!focus &&
                                                <label className={styles.label}>Şifreniz</label>
                                            }
                                            {focus &&
                                                <label className={styles.focusLabel}>Şifreniz</label>
                                            }
                                            {error &&
                                                <>
                                                    <div className={styles.errorMain}>
                                                        <ErrorLogin className={styles.errorIcon} />
                                                    </div>
                                                    <span className={styles.errorMessage}>Lütfen şifrenizi giriniz.</span>
                                                </>
                                            }
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
                                        <Link href='https://getir.com/yardim/kvkk/' className={styles.lightningLink} target="_blank">
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