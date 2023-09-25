import React, { useState } from 'react'
import Close from "./assets/svg/navbar/close.svg"
import address from "../styles/homepage/AddressModal.module.scss"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { actionAddAddressModal } from '../store/address'

function LanguageModal() {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [addres, setAddres] = useState('')
    const [building, setBuilding] = useState('')
    const [floor, setFloor] = useState('')
    const [apt, setApt] = useState('')
    const [directions, setDirections] = useState('')
    const [addressList] = useState([])
    let id = 0;
    const handleClick = async () => {
        if (title && addres && building && floor && apt && directions) {
            addressList.push({
                id: id++,
                title: title,
                address: addres,
                building: building,
                floor: floor,
                apt: apt,
                directions, directions
            });
            localStorage.setItem("addressList", JSON.stringify(addressList))
            dispatch(actionAddAddressModal(false))
        }
    }

    return (
        <>
            <div className={address.modalContainer}>
                <div className={address.modalMain}>
                    <div className={address.modalClose}>
                        <button className={address.modalCloseButton} onClick={() => dispatch(actionAddAddressModal(false))}>
                            <div className={address.modalCloseIcon}>
                                <Close className={address.icon} />
                            </div>
                        </button>
                    </div>
                    <div className={address.modalContent}>
                        <div className={address.modaltitleDiv}>
                            <h6 className={address.title}>{t('AddAddressModal.title')}</h6>
                        </div>
                        <div className={address.formMain}>
                            <div className={address.titleMain}>
                                <div className={address.iconMain}>
                                    <div className={address.iconContainer}>
                                        <div className={address.iconMainWrapper}>
                                            <div className={address.iconHeaderWrapper}>
                                                <div className={address.iconHead}>
                                                    <div className={address.figureMain}>
                                                        <figure width="26px" height="26px" className={address.figure}>
                                                            <img src="https://cdn.getir.com/address-emojies/House.svg" alt="HOUSE" className={address.icon} />
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={address.titleContainer}>
                                    <div className={address.titleWrapper}>
                                        <div className={address.titleHeaderWrapper}>
                                            <input type="text" name="name" className={address.titleInput} required onChange={(e) => setTitle(e.target.value)} />
                                            <label className={address.titleInputLabel}>{t('AddAddressModal.form.title')}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={address.addressMain}>
                                <div className={address.addressContainer}>
                                    <div className={address.addressWrapper}>
                                        <div className={address.addressHeaderWrapper}>
                                            <input type="text" name='address' className={address.addressInput} required onChange={(e) => setAddres(e.target.value)} />
                                            <label className={address.addressInputLabel}>{t('AddAddressModal.form.address')}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={address.addressMain}>
                                <div className={address.buildingMain}>
                                    <div className={address.buildingContainer}>
                                        <div className={address.buildingWrapper}>
                                            <div className={address.buildingHeaderWrapper}>
                                                <input type="text" name="aptNo" className={address.buildingInput} required onChange={(e) => setBuilding(e.target.value)} />
                                                <label className={address.buildingInputLabel}>{t('AddAddressModal.form.building')}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={address.floorMain}>
                                    <div className={address.floorContainer}>
                                        <div className={address.floorWrapper}>
                                            <div className={address.floorHeaderWrapper}>
                                                <input type="text" name="floor" className={address.floorInput} required onChange={(e) => setFloor(e.target.value)} />
                                                <label className={address.floorInputLabel}>{t('AddAddressModal.form.floor')}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={address.aptMain}>
                                    <div className={address.aptContainer}>
                                        <div className={address.aptWrapper}>
                                            <div className={address.aptHeaderWrapper}>
                                                <input type="text" name="doorNo" className={address.aptInput} required onChange={(e) => setApt(e.target.value)} />
                                                <label className={address.aptInputLabel}>{t('AddAddressModal.form.apt')}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={address.directionsMain}>
                                <div className={address.directionsContainer}>
                                    <div className={address.directionsWrapper}>
                                        <div className={address.directionsHeaderWrapper}>
                                            <input type="text" name="description" className={address.directionsInput} required onChange={(e) => setDirections(e.target.value)} />
                                            <label className={address.directionsInputLabel}>{t('AddAddressModal.form.addressDirections')}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={address.addressButtonMain}>
                                <div className={address.buttonDiv}>
                                    <button className={address.addressButton} onClick={handleClick}>{t('AddAddressModal.button')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='backdrop' onClick={() => dispatch(actionAddAddressModal(false))}></div>
        </>
    )
}

export default LanguageModal