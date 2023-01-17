import React from 'react'
import Link from "next/link"
import Close from "./assets/svg/navbar/close.svg"
import styles from "../styles/layout/SignUpModal.module.scss"
import PhoneInput from './PhoneInput'
import ErrorLogin from "./assets/svg/header/errorLogin.svg"
import { useState } from 'react'
import Checked from "./assets/svg/header/checked.svg"

function SignUpModal({ shadowClick, signUpClick }) {
    const [focus, setFocus] = useState(false)
    const [error, setError] = useState(false)
    const [checked, setChecked] = useState(false)
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
    function submit() {
      if(error) {
        return false
      }
      else {
        console.log('error yok')
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
                        <h6 className={styles.title}>Kayıt Ol</h6>
                    </div>
                    <div className={styles.main}>
                        <form className={styles.loginForm}>
                            <div className={styles.loginInputs}>
                                <div className={`${styles.inputsMain} ${error ? styles.errorInputs : ''}`}>
                                    <PhoneInput />
                                    <div className={`${styles.phoneInputContainer} ${focus ? styles.focusContainer : ''} ${error ? styles.errorInput : ''}`}>
                                        <input onBlur={(event) => inputFocusOut(event)} onClick={() => setFocus(true)} type="tel" className={styles.phone} name="gsm" pattern="[0-9.]+" maxLength="10" minLength="10" required />
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
                                <div className={styles.nameInputContainer}>
                                  <div className={`${styles.nameInput} ${error ? styles.errorInput : ''}`}>
                                    <div className={styles.nameInputMain}>
                                      <input onBlur={(event) => inputFocusOut(event)} onClick={() => setFocus(true)} type="text" className={styles.name} name="name" />
                                      {!focus &&
                                            <label className={styles.label}>Ad Soyad</label>
                                        }
                                        {focus &&
                                            <label className={styles.focusLabel}>Ad Soyad</label>
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
                                          <span className={styles.errorMessage}>Lütfen ad ve soyadınızı giriniz.</span>
                                      </>
                                  }
                                </div>
                                <div className={styles.emailInputContainer}>
                                  <div className={`${styles.nameInput} ${error ? styles.errorInput : ''}`}>
                                    <div className={styles.nameInputMain}>
                                      <input onBlur={(event) => inputFocusOut(event)} onClick={() => setFocus(true)} type="email" className={styles.name} name="email" />
                                      {!focus &&
                                            <label className={styles.label}>E-Posta</label>
                                        }
                                        {focus &&
                                            <label className={styles.focusLabel}>E-Posta</label>
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
                                          <span className={styles.errorMessage}>Lütfen email adresinizi giriniz.</span>
                                      </>
                                  }
                                </div>
                                <div className={styles.passwordInputContainer}>
                                  <div className={`${styles.nameInput} ${error ? styles.errorInput : ''}`}>
                                    <div className={styles.nameInputMain}>
                                      <input onBlur={(event) => inputFocusOut(event)} onClick={() => setFocus(true)} type="password" className={styles.name} name="password" />
                                      {!focus &&
                                            <label className={styles.label}>Şifre Oluşturun</label>
                                        }
                                        {focus &&
                                            <label className={styles.focusLabel}>Şifre Oluşturun</label>
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
                                          <span className={styles.errorMessage}>Lütfen şifrenizi giriniz.</span>
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
                                        <span className={styles.info}>Getir’in bana özel kampanya, tanıtım ve fırsatlarından haberdar olmak istiyorum.</span>
                                    </label>
                                </div>
                                <span className={styles.lightningText}>Kişisel verilerinize dair Aydınlatma Metni için <Link className={styles.link} href="https://agreements.getir.com/privacy_notice18112022_100_TR_tr_2.html" target="_blank">tıklayınız</Link>.Üye olmakla, <Link className={styles.link} href="https://agreements.getir.com/tcs2282022_200_TR_tr_4.html" target="_blank">Kullanım Koşulları</Link> hükümlerini kabul etmektesiniz.</span>
                            </div>
                            <div className={styles.loginButtonMain}>
                                <div className={styles.buttonDiv}>
                                    <button className={styles.loginButton} onClick={() => submit()}>Kayıt Ol</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={styles.modalBottom}>
                      Getir'e üyeyseniz 
                        <div className={styles.signUp}>
                            <button className={styles.signUpButton} onClick={signUpClick}>
                                Giriş yap
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

export default SignUpModal