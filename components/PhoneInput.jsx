import React, { useState } from 'react'
import { phoneList } from '../data/PhoneList'
import styles from "../styles/layout/PhoneInput.module.scss"
import ArrowDown from "./assets/svg/navbar/arrowDown.svg"

function PhoneInput() {
    const [show, setShow] = useState(false)
    const [selectedId, setSelectedId] = useState("do")
    const [selectedCode, setSelectedCode] = useState("90")
  return (
    <div className={styles.dropdownContainer}>
        <div className={`${styles.selectedFlag} country-flag country-flag-${selectedId}`}></div>
        <div className={styles.dropdownMain} onClick={() => setShow(!show)}>
            <div className={styles.flagDropdown}>
                <div className={`${show ? styles.open : ''} ${styles.selectFlag}`}>
                    <div className={styles.flag}>
                        <ArrowDown className={`${show ? styles.open : ''} ${styles.icon}`} />
                    </div>
                </div>
                {show &&
                    <ul className={styles.dropdown}>
                    {phoneList.map((phone, index) => (
                        <li key={index} className={styles.dropdownList} onClick={() => {setSelectedId(phone.id); setSelectedCode(phone.code)}}>
                            <div className={`${styles.phoneCode} country-flag country-flag-${phone.id}`}></div>
                            <span className={styles.countryName}>{phone.name}</span>
                            <span className={styles.dialCode}>{phone.code}</span>
                        </li>
                    ))}
                    </ul>
                }
            </div>
        </div>
        <span className={styles.selectedCode}>+{selectedCode}</span>
    </div>
  )
}

export default PhoneInput