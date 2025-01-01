import React from 'react'
import { useRouter } from "next/router"
import ProductDetails from '../../components/ProductDetails'
import { useSelector } from 'react-redux'
import home from "../../styles/homepage/Index.module.scss"

function Product() {
    const router = useRouter()
    const { id } = router.query
    const { productsList } = useSelector(state => state.products)
    console.log(id, 'id')
    return (
        productsList.map((subCategories) => {
            return (
                subCategories.subCategories?.map((subCategory) => {
                    return (
                        subCategory.products?.map((product, index) => {
                            return (
                                <ProductDetails key={index} id={id} product={product} />
                            )
                        })
                    )
                })
            )
        })
    )
}

export default Product