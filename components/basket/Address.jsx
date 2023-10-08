import React from "react"
import Location from '../assets/svg/location.svg'
import styles from '../../styles/basket/Index.module.scss'
import { useSelector } from "react-redux"


const Address = () => {
    const { addressList } = useSelector(state => state.address)
    return (
        <div className={styles.addressMain}>
            <div className={styles.titleMain}>
                <h5 className={styles.title}>Adres</h5>
            </div>
            <div className={styles.addressInfoMain}>
                <div className={styles.addressIconMain}>
                    <Location className={styles.icon} />
                </div>
                {JSON.parse(addressList)?.map((item, index) => (
                    <address key={index} className={styles.address}>{item.address}</address>
                ))}
            </div>
        </div>
    )
}

export default Address