import React from 'react'
import Link from "next/link"
import Close from "./assets/svg/navbar/close.svg"
import styles from "../styles/layout/LanguageModal.module.scss"
import address from "../styles/homepage/AddressModal.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import { actionLanguageModal, actionSelectedLanguage, actionSelectedLang } from '../store/language'
import { languageList } from '../data/LanguageList'
import { useTranslation } from "react-i18next"
import { actionAddressModal, actionAddAddressModal } from '../store/address'

function AddressModal() {
    const { addressList, selectedAddress } = useSelector(state => state.address)
    const [selectedRadio, setSelectedRadio] = useState(JSON.parse(selectedAddress)[0].id)

    const { t } = useTranslation()
    const dispatch = useDispatch()

    return (
        <>
            <div className={styles.modalContainer}>
                <div className={styles.modalMain}>
                    <div className={styles.modalClose}>
                        <button className={styles.modalCloseButton} onClick={() => dispatch(actionAddressModal(false))}>
                            <div className={styles.modalCloseIcon}>
                                <Close className={styles.icon} />
                            </div>
                        </button>
                    </div>
                    <div className={styles.modalContent}>
                        <div className={styles.modaltitleDiv}>
                            <h6 className={styles.title}>{t('AddressModal.title')}</h6>
                        </div>
                        <div className={styles.main}>
                            <div className={address.radioGrup}>
                                {JSON.parse(addressList)?.map((item, index) => (
                                    <label key={index} className={address.radioLabel}>
                                        <span className={address.checkboxMain}>
                                            <input type="radio" className={address.checkbox} id={`address-${item.id}`} name="address" value={item.id} />
                                            <span className={`${address.radioBox} ${item.id === selectedRadio ? address.checked : null}`} ></span>
                                        </span>
                                        <span className={address.iconContainer}>
                                            <span className={address.iconMain}>
                                                <figure className={address.figure}>
                                                    <img src="https://cdn.getir.com/address-emojies/House.svg" alt={item.title} className={address.icon} />
                                                </figure>
                                                <div className={address.typeMain}>
                                                    <p className={address.type}>{item.title}</p>
                                                </div>
                                                <span className={address.addresText}>({item.address})</span>
                                            </span>
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className={styles.languageButtonMain}>
                            <div className={`${styles.buttonDiv}`}>
                                <button className={styles.languageButton} onClick={() => dispatch(actionAddressModal(false))}>{t('AddressModal.button')}</button>
                            </div>
                        </div>
                        <div className={address.addAddressMain}>
                            <span className={address.addAddressText}>{t('AddressModal.addAddress')}</span>
                            <div className={address.addAddressButtonMain}>
                                <button type="button" className={address.addAddressButton} onClick={() => {
                                    dispatch(actionAddressModal(false))
                                    dispatch(actionAddAddressModal(true))
                                }}>{t('AddressModal.addAddressButton')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className='backdrop' onClick={() => dispatch(actionAddressModal(false))}></div>
        </>
    )
}

export default AddressModal