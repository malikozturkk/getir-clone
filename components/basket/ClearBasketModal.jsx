import React, { useEffect, useRef } from "react"
import styles from '../../styles/basket/Index.module.scss'
import { useDispatch } from "react-redux"
import { actionClearBasket } from "../../store/basket"

const ClearBasketModal = ({ modal, showModal }) => {
    const dispatch = useDispatch()
    const ref = useRef();
    const clearBasket = () => {
        dispatch(actionClearBasket())
        showModal(false)
        const body = document.querySelector("body");
        body.classList.remove("showClearBasketModal");
        window.location.pathname = '/'
    }
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            modal && ref.current && !ref.current.contains(e.target)
                ? showModal((oldState) => !oldState)
                : null;
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
            const body = document.querySelector("body");
            body.classList.remove("showClearBasketModal");
        };
    }, [modal]);
    return (
        <div className={styles.clearBasketWrapper}>
            <div className={styles.clearBasketBackdrop}></div>
            <div className={styles.modalWrapper}>
                <div className={styles.modal} ref={ref}>
                    <div className={styles.modalContent}>
                        <div className={styles.content}>
                            <span>Sepeti boşaltmak istediğinizden emin misiniz?</span>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.FooterButtonContainer}>
                                <div className={styles.wrapperNo}>
                                    <button className={styles.button} onClick={() => {
                                        showModal(false)
                                        const body = document.querySelector("body");
                                        body.classList.remove("showClearBasketModal");
                                    }}>Hayır</button>
                                </div>
                                <div className={styles.wrapperYes}>
                                    <button className={styles.button} onClick={() => clearBasket()}>Evet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClearBasketModal