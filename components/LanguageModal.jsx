import React from 'react'
import Link from "next/link"
import Close from "./assets/svg/navbar/close.svg"
import styles from "../styles/layout/LanguageModal.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import { actionLanguageModal, actionSelectedLanguage, actionSelectedLang } from '../store/language'
import { languageList } from '../data/LanguageList'
import { useTranslation } from "react-i18next"

function LanguageModal() {
    const { selectedLanguage, selectLang } = useSelector(state => state.language)
    const [selectedRadio, setSelectedRadio] = useState(selectedLanguage)
    const [selectedLang, setSelectedLang] = useState(selectLang)
    const disabled = selectedLanguage === selectedRadio ? true : false
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        if (disabled) {
            return false
        }
        else {
            e.preventDefault();
            dispatch(actionSelectedLanguage(selectedRadio))
            dispatch(actionSelectedLang(selectedLang))
            dispatch(actionLanguageModal(false))
            i18n.changeLanguage(selectedRadio === 'do' ? 'tr' : 'en')
        }
    }

    const selectLanguage = (event) => {
        setSelectedRadio(event.target.value)
        setSelectedLang(event.target.value === 'do' ? 'Türkçe (TR)' : 'English (EN)')
    }
  return (
    <>
        <div className={styles.modalContainer}>
            <div className={styles.modalMain}>
                <div className={styles.modalClose}>
                    <button className={styles.modalCloseButton} onClick={() => dispatch(actionLanguageModal(false))}>
                        <div className={styles.modalCloseIcon}>
                            <Close className={styles.icon} />
                        </div>
                    </button>
                </div>
                <div className={styles.modalContent}>
                    <div className={styles.modaltitleDiv}>
                        <h6 className={styles.title}>{t('LanguageModal.title')}</h6>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.languageForm}>
                            {languageList.map((language, index) => (
                                <label key={index} className={styles.radioLabel} onClick={selectLanguage}>
                                    <span className={styles.radioInput}>
                                        <input type="radio" className={styles.radio} id={`language-${index}`} name="language" value={language.id} />
                                        <span className={`${styles.radioSpan} ${language.id === selectedRadio ? styles.checked : null}`} ></span>
                                    </span>
                                    <span key={index} className={styles.radioList}>
                                        <span className={styles.countryName}>{language.name}</span>
                                        <div className={`${styles.languageCode} country-flag country-flag-${language.id}`}></div>
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className={styles.languageButtonMain}>
                        <div className={`${styles.buttonDiv} ${disabled ? styles.disabled : null}`}>
                            <button className={styles.languageButton} onClick={handleSubmit}>{t('LanguageModal.button')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='backdrop' onClick={() => dispatch(actionLanguageModal(false))}></div>
    </>
  )
}

export default LanguageModal