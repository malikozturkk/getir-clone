import React from 'react'
import Link from "next/link"
import Close from "./assets/svg/navbar/close.svg"
import styles from "../styles/layout/SignUpModal.module.scss"
import PhoneInput from './PhoneInput'
import ErrorLogin from "./assets/svg/header/errorLogin.svg"
import { useState } from 'react'
import Checked from "./assets/svg/header/checked.svg"
import { login, actionSignupModal, actionLoginModal } from '../store/auth'
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"

function SignUpModal() {
    const [focus, setFocus] = useState(false)
    const [error, setError] = useState(false)
    const [checked, setChecked] = useState(false)
    const [userName, setUserName] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const closeModal = () => {
      dispatch(actionSignupModal(false))
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
    const handleSubmit = async (e) => {
      if(error) {
        return false
      }
      else {
        e.preventDefault();
        setUserName('');
        localStorage.setItem("userName", userName)
        setPhone('');
        localStorage.setItem("phone", phone)
        dispatch(login())
        dispatch(actionSignupModal(false))
      }
    }

  return (
    <>
        <div className={styles.modalContainer}>
            <div className={styles.modalMain}>
                <div className={styles.modalClose}>
                    <button className={styles.modalCloseButton} onClick={closeModal}>
                        <div className={styles.modalCloseIcon}>
                            <Close className={styles.icon} />
                        </div>
                    </button>
                </div>
                <div className={styles.modalContent}>
                    <div className={styles.modaltitleDiv}>
                        <h6 className={styles.title}>{t('SignUpModal.title')}</h6>
                    </div>
                    <div className={styles.main}>
                        <form className={styles.loginForm} onSubmit={handleSubmit}>
                            <div className={styles.loginInputs}>
                                <div className={`${styles.inputsMain} ${error ? styles.errorInputs : ''}`}>
                                    <PhoneInput />
                                    <div className={`${styles.phoneInputContainer} ${focus ? styles.focusContainer : ''} ${error ? styles.errorInput : ''}`}>
                                        <input onBlur={(event) => inputFocusOut(event)} onClick={() => setFocus(true)} onChange={(event) => setPhone(event.target.value)}  type="tel" className={styles.phone} name="gsm" pattern="[0-9.]+" maxLength="10" minLength="10" required />
                                        {!focus &&
                                            <label className={styles.label}>{t('SignUpModal.labels.phone')}</label>
                                        }
                                        {focus &&
                                            <label className={styles.focusLabel}>{t('SignUpModal.labels.phone')}</label>
                                        }
                                        {error &&
                                            <>
                                                <div className={styles.errorMain}>
                                                    <ErrorLogin className={styles.errorIcon} />
                                                </div>
                                                <span className={styles.errorMessage}>{t('SignUpModal.errors.phone')}</span>
                                            </>
                                        }
                                    </div>
                                </div>
                                <div className={styles.nameInputContainer}>
                                  <div className={`${styles.nameInput} ${error ? styles.errorInput : ''}`}>
                                    <div className={styles.nameInputMain}>
                                      <input onBlur={(event) => inputFocusOut(event)} onClick={() => setFocus(true)} type="text" className={styles.name} name="name" onChange={(event) => setUserName(event.target.value)} />
                                      {!focus &&
                                            <label className={styles.label}>{t('SignUpModal.labels.name')}</label>
                                        }
                                        {focus &&
                                            <label className={styles.focusLabel}>{t('SignUpModal.labels.name')}</label>
                                        }
                                        {error &&
                                          <div className={styles.errorMain}>
                                            <ErrorLogin className={styles.errorIcon} />
                                          </div>
                                        }
                                    </div>
                                  </div>
                                  {error &&
                                      <>
                                          <span className={styles.errorMessage}>{t('SignUpModal.errors.name')}</span>
                                      </>
                                  }
                                </div>
                                <div className={styles.emailInputContainer}>
                                  <div className={`${styles.nameInput} ${error ? styles.errorInput : ''}`}>
                                    <div className={styles.nameInputMain}>
                                      <input onBlur={(event) => inputFocusOut(event)} onClick={() => setFocus(true)} type="email" className={styles.name} name="email" />
                                      {!focus &&
                                            <label className={styles.label}>{t('SignUpModal.labels.email')}</label>
                                        }
                                        {focus &&
                                            <label className={styles.focusLabel}>{t('SignUpModal.labels.email')}</label>
                                        }
                                        {error &&
                                          <div className={styles.errorMain}>
                                            <ErrorLogin className={styles.errorIcon} />
                                          </div>
                                        }
                                    </div>
                                  </div>
                                  {error &&
                                      <>
                                          <span className={styles.errorMessage}>{t('SignUpModal.errors.email')}</span>
                                      </>
                                  }
                                </div>
                            </div>
                            <div className={styles.termsAndConditions}>
                                <div className={styles.main}>
                                    <label className={styles.label}>
                                        <span className={styles.span}>
                                            <input className={styles.checkbox} onClick={() => setChecked(!checked)} type="checkbox" tabindex="0" name="acceptedToReceiveNews" value={checked} />
                                            <div className={`${styles.check} ${checked ? styles.checked : ''}`}>
                                              {checked &&
                                                <div className={styles.checkedMain}>
                                                  <Checked className={styles.checkedIcon} />
                                                </div>
                                              }
                                            </div>
                                        </span>
                                        <span className={styles.info}>{t('SignUpModal.news')}</span>
                                    </label>
                                </div>
                                <span className={styles.lightningText}>{t('SignUpModal.lightning.1')}<Link className={styles.link} href="https://agreements.getir.com/privacy_notice18112022_100_TR_tr_2.html" target="_blank" scroll={false}>{t('SignUpModal.lightning.2')}</Link>{t('SignUpModal.lightning.3')}<Link className={styles.link} href="https://agreements.getir.com/tcs2282022_200_TR_tr_4.html" target="_blank" scroll={false}>{t('SignUpModal.lightning.4')}</Link>{t('SignUpModal.lightning.5')}</span>
                            </div>
                            <div className={styles.loginButtonMain}>
                                <div className={styles.buttonDiv}>
                                    <button className={styles.loginButton}>{t('SignUpModal.button')}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={styles.modalBottom}>
                      {t('SignUpModal.login.info')}
                        <div className={styles.signUp}>
                            <button className={styles.signUpButton} onClick={() => {
                              dispatch(actionSignupModal(false)),
                              dispatch(actionLoginModal(true))
                            }}>
                                {t('SignUpModal.login.text')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='backdrop' onClick={closeModal}></div>
    </>
  )
}

export default SignUpModal