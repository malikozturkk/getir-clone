import React from 'react'
import Link from "next/link"
import Close from "./assets/svg/navbar/close.svg"
import styles from "../styles/layout/LoginModal.module.scss"
import PhoneInput from './PhoneInput'
import ErrorLogin from "./assets/svg/header/errorLogin.svg"
import { useState } from 'react'
import { login, actionSignupModal, actionLoginModal } from '../store/auth'
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"

function LoginModal() {
    const dispatch = useDispatch()
    const [focus, setFocus] = useState(false)
    const [error, setError] = useState(false)
    const [phone, setPhone] = useState('')
    const [phoneLength, setPhoneLength] = useState(0)
    const { t } = useTranslation()

    const handleSubmit = async (e) => {
        if(!localStorage.getItem("userName")) {
            dispatch(actionSignupModal(true))
            dispatch(actionLoginModal(false))
            return false
        }
        else if (phoneLength < 10) {
            setError(true)
        }
        else {
            e.preventDefault();
            setPhone('');
            localStorage.setItem("phone", phone)
            dispatch(login())
            dispatch(actionLoginModal(false))
        }
    }

    function inputFocusOut(event) {
        setFocus(false)
        const input = event.target.value
        setPhoneLength(input.length)
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
                    <button className={styles.modalCloseButton} onClick={() => dispatch(actionLoginModal(false))}>
                        <div className={styles.modalCloseIcon}>
                            <Close className={styles.icon} />
                        </div>
                    </button>
                </div>
                <div className={styles.modalContent}>
                    <div className={styles.modaltitleDiv}>
                        <h6 className={styles.title}>{t('LoginModal.title')}</h6>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.loginForm}>
                            <div className={`${styles.loginInputs} ${error ? styles.errorInputs : ''}`}>
                                <div className={`${styles.inputsMain} ${error ? styles.errorInputs : ''}`}>
                                    <PhoneInput />
                                    <div className={`${styles.phoneInputContainer} ${focus ? styles.focusContainer : ''} ${error ? styles.errorInput : ''}`}>
                                        <input onBlur={(event) => inputFocusOut(event)} onClick={() => setFocus(true)}  onChange={(event) => setPhone(event.target.value)} type="tel" className={styles.phone} name="identifier" pattern="[0-9.]+" maxLength="10" minLength="10" required />
                                        {!focus &&
                                            <label className={styles.label}>{t('LoginModal.inputText')}</label>
                                        }
                                        {focus &&
                                            <label className={styles.focusLabel}>{t('LoginModal.inputText')}</label>
                                        }
                                        {error &&
                                            <>
                                                <div className={styles.errorMain}>
                                                    <ErrorLogin className={styles.errorIcon} />
                                                </div>
                                                <span className={styles.errorMessage}>{t('LoginModal.alert')}</span>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={styles.loginButtonMain}>
                                <div className={styles.buttonDiv}>
                                    <button className={styles.loginButton} onClick={handleSubmit}>{t('LoginModal.buttonText')}</button>
                                </div>
                                <div className={styles.lightningMain}>
                                    {t('LoginModal.lightningText')}
                                    <div className={styles.lightningClick}>
                                        <Link href='https://getir.com/yardim/kvkk/' scroll={false} className={styles.lightningLink} target="_blank">
                                            {t('LoginModal.lightningClick')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.modalBottom}>
                        {t('LoginModal.signedText')}
                        <div className={styles.signUp}>
                            <button className={styles.signUpButton} onClick={() => {
                                dispatch(actionSignupModal(true))
                                dispatch(actionLoginModal(false))
                            }}>
                                {t('LoginModal.signedLink')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='backdrop' onClick={() => dispatch(actionLoginModal(false))}></div>
    </>
  )
}

export default LoginModal