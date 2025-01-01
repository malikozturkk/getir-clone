import React from 'react'
import { useRouter } from "next/router"
import Basket from "../components/Basket"
import ProductDataList from '../components/ProductDataList'
import InfoWrapper from "../components/infoWrapper"
import Sliders from "../components/Slider"
import Categories from "../components/Categories"
import PastOrders from "../components/PastOrders"
import home from "../styles/homepage/Index.module.scss"

function Category() {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <InfoWrapper />
            <main className={home.main}>
                <div className={home.container}>
                    <Sliders />
                    <div className={home.contents}>
                        <div className={home.categories}>
                            <Categories id={id} />
                        </div>
                        <div className={home.productList}>
                            <ProductDataList id={id} />
                        </div>
                        <div className={home.basket}>
                            <Basket />
                            <PastOrders />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Category